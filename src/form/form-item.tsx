/* eslint-disable eqeqeq */
import cx from 'classnames';
import pick from 'lodash/pick';
import { reaction, runInAction, toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useLayoutEffect } from 'react';
import stringifyObject from 'stringify-object';
import { composeValue } from './common-utils';
import { ALL_COMPONENTS } from './default-component';
import { useFormEnv, useModel } from './form';
import { FormItemView } from './form-ui';
import { Field, FieldConfig, FieldType, FormModel } from './model';

function isFalsyOrEmptyArray(value: any) {
  return !value || (Array.isArray(value) && value.length === 0);
}

function resolveField(
  fieldProp: Field<any>,
  model: FormModel<any>,
  name: string,
  valueProp: any,
) {
  let field: Field<any>;

  if (fieldProp != null) {
    field = fieldProp;
  } else if (name === '&') {
    field = model._asField();
  } else if (name != null) {
    field = model.getField(name);
  } else {
    // readonly field 每次都会重新生成
    field = new Field({
      fieldType: FieldType.readonly,
      value: valueProp,
      name: '(readonly)',
      forkName: Field.ORIGINAL,
      parent: model,
    });
  }

  return field;
}

export interface FormItemComponentProps {
  value?: any;
  onChange?(...args: any[]): void;
  onFocus?(...args: any[]): void;
  onBlur?(...args: any[]): void;
  readOnly?: any;
  disabled?: any;
  isPreview?: any;

  [prop: string]: any;
}

export interface FormItemCreationOptions {
  /** 名称 */
  name: string;

  /** 是否为隐藏元素 */
  hidden?: boolean;

  /** 是否需要将 field 对象传递给组件 */
  withField?: boolean;

  /** 控件对应的 React 组件，例如 `<FormItem component="select" />` 对应 `Select` 组件. */
  component?: React.ComponentType<FormItemComponentProps>;

  /** 控件渲染方法，与 component 参数二选一，优先级高于 component */
  render?(arg: FormItemComponentProps): React.ReactElement;

  /** 组件值的属性名称，默认为 `'value'` */
  valuePropName?: string;

  /** 组件状态值的属性名称，默认为 `'state'` */
  statusPropName?: string;

  /** 预览态下组件的渲染方法。如果不设置该方法，预览态下将使用 render/component 作为后备方案. */
  renderPreview?(props: FormItemComponentProps): React.ReactNode;

  /** 默认值 */
  defaultValue?: any;

  /** 组件类型默认的空值判断方法 */
  isEmpty?(value: any): boolean;

  /** 组件是否具有固有宽度，默认为 true。该选项为 true 时，controlWidth 将不对组件产生效果 */
  hasIntrinsicWidth?: boolean;
}

function processCreationOptions(
  options: FormItemCreationOptions,
): Required<Omit<FormItemCreationOptions, 'component'>> {
  const render =
    options.render ??
    ((props) => React.createElement(options.component, props));
  return {
    name: options.name,
    hidden: options.hidden,
    withField: Boolean(options.withField),
    statusPropName: composeValue(options.statusPropName, 'state'),
    valuePropName: composeValue(options.valuePropName, 'value'),
    hasIntrinsicWidth: options.hasIntrinsicWidth !== false,
    defaultValue: Object.keys(options).includes('defaultValue')
      ? options.defaultValue
      : null,
    isEmpty: options.isEmpty ?? isFalsyOrEmptyArray,
    render: render,
    renderPreview: options.renderPreview ?? render,
  };
}

export function createFormItem(inputOptions: FormItemCreationOptions) {
  const options = processCreationOptions(inputOptions);

  function FormItemComponent({
    defaultValue: defaultValueProp,
    isEmpty = options.isEmpty,
    renderPreview = options.renderPreview,
    componentProps: componentPropsProp,
    name,
    field: fieldProp,
    ...props
  }: Omit<FormItemProps, 'component'>) {
    const formEnv = useFormEnv();
    const model = useModel();
    const field = resolveField(fieldProp, model, name, props.value);

    const isPreview = composeValue(props.isPreview, formEnv.isPreview);
    const error = composeValue(props.error, field.state.error);
    const defaultValue = composeValue(defaultValueProp, options.defaultValue);
    const value = toJS(composeValue(field.value, defaultValue));
    const htmlId = Field.getHtmlId(formEnv.htmlIdPrefix, field);

    const componentProps = {
      id: htmlId,
      ...(isPreview ? { isPreview: true } : null),
      // dataSource, readOnly, disabled 允许直接透传
      ...pick(props, ['dataSource', 'readOnly', 'disabled']),
      ...componentPropsProp,
      // status 优先用 prop 中的值，然后再根据 error 自动判断
      [options.statusPropName]: composeValue(
        componentPropsProp?.[options.statusPropName],
        composeValue(
          props[options.statusPropName],
          error ? 'error' : undefined,
        ),
      ),
      [options.valuePropName]: composeValue(
        props[options.valuePropName],
        value,
      ),
      onChange: composeValue(props.onChange, field.handleChange),
      onFocus: composeValue(props.onFocus, field.handleFocus),
      onBlur: composeValue(props.onBlur, field.handleBlur),
    };
    if (options.withField) {
      componentProps.field = field;
    }

    const fieldConfig: FieldConfig<unknown> = {
      htmlId,
      valueProp: props[options.valuePropName],
      defaultValue,
      defaultValueProp,
      isEmpty,
      validateOnChange: formEnv.validateOnChange,
      validateOnBlur: formEnv.validateOnBlur,
      validateOnMount: formEnv.validateOnMount,
      writeDefaultValueToModel: formEnv.writeDefaultValueToModel,
      autoUnmount: formEnv.autoUnmount,
      ...props,
    };

    // 利用 useLayoutEffect 将 fieldConfig 设置到 field.config 上
    useLayoutEffect(() => field._track(fieldConfig));

    // 处理 writeDefaultValueToModel 与 autoUnmount
    useLayoutEffect(() => {
      if (fieldConfig.writeDefaultValueToModel === 'force') {
        return reaction(
          () => field.value,
          () => {
            if (
              field.value === undefined &&
              fieldConfig.defaultValueProp !== undefined
            ) {
              field.value = fieldConfig.defaultValueProp;
            }
          },
          { fireImmediately: true },
        );
      } else if (fieldConfig.writeDefaultValueToModel) {
        if (
          field.value === undefined &&
          fieldConfig.defaultValueProp !== undefined
        ) {
          // 注意只有「不为 undefined」且「通过 FormItem props 设置的」的默认值才会被回写到 model 中
          runInAction(() => {
            field.value = fieldConfig.defaultValueProp;
          });
        }
      }

      return () => {
        if (fieldConfig.autoUnmount) {
          field.clear();
        }
      };
    }, []);

    useEffect(() => {
      if (fieldConfig.validateOnMount) {
        field.validate('mount');
        const cancel = field.state.cancelValidation;
        return () => {
          cancel?.();
        };
      }
    }, []);

    if (options.hidden) {
      // renderHiddenFormItemView 是内部 api，仅用在 arrayTable 和 component=hidden 组合使用的情况
      if ((props as any).renderHiddenFormItemView === false) {
        return null;
      }
    }

    return (
      <FormItemView
        htmlId={htmlId}
        label={props.label}
        help={props.help}
        asterisk={props.asterisk ?? props.required}
        error={error}
        tip={props.tip}
        style={props.style}
        className={cx(props.className, {
          'form-item-hidden': options.hidden,
          'form-item-preview': isPreview,
          'auto-control-width': options.hasIntrinsicWidth,
        })}
        labelWidth={props.labelWidth}
        labelStyle={props.labelStyle}
        controlWidth={props.controlWidth}
        controlStyle={props.controlStyle}
        rightNode={props.rightNode}
      >
        {isPreview
          ? renderPreview(componentProps)
          : options.render(componentProps)}
      </FormItemView>
    );
  }

  FormItemComponent.displayName = `FormItem__${options.name}`;

  return observer(FormItemComponent);
}

const COMPONENT_DICT: { [name: string]: React.FunctionComponent<any> } = {};
for (const config of ALL_COMPONENTS) {
  const Component = createFormItem(config);
  COMPONENT_DICT[config.name] = Component;
  if (config.aliases) {
    for (const alias of config.aliases) {
      COMPONENT_DICT[alias] = Component;
    }
  }
}

const Hidden = createFormItem({
  name: 'hidden',
  hidden: true,
  hasIntrinsicWidth: false,
  defaultValue: undefined,
  isEmpty() {
    return false;
  },
  render({ id, value }) {
    return <input type="hidden" value={stringifyObject(value)} id={id} />;
  },
});

const NotFound = createFormItem({
  name: 'notFound',
  isEmpty: () => false,
  render({ $Component }: FormItemComponentProps) {
    return (
      <div
        style={{
          border: '1px dashed red',
          fontSize: 14,
          padding: 4,
          color: 'red',
        }}
      >
        <code>&lt;FormItem component='{$Component}' /&gt;</code>{' '}
        没有找到对应组件，请检查组件名称是否拼写正确
      </div>
    );
  },
});

const AnonymousFormItem = createFormItem({
  name: 'anonymous',
  render({ $Component: Component, ...props }: FormItemComponentProps) {
    return <Component {...props} />;
  },
});

export interface FormItemProps
  extends Omit<FieldConfig<any>, 'defaultValueProp' | 'valueProp' | 'htmlId'> {
  use?: boolean;
  component: string | React.ComponentType<FormItemComponentProps>;
  componentProps?: any;
  dataSource?: any;
  style?: React.CSSProperties;
  className?: string;

  name?: string;
  field?: Field;

  value?: any;
  onChange?(nextValue: any): void;
  onFocus?(): void;
  onBlur?(): void;
  renderPreview?(props: FormItemProps): React.ReactNode;

  labelWidth?: number | string;
  controlWidth?: number | string;
  labelStyle?: React.CSSProperties;
  controlStyle?: React.CSSProperties;
  rightNode?: React.ReactNode;
  isPreview?: boolean;
}

export function FormItem({ use, component, ...props }: FormItemProps) {
  if (use === false) {
    return null;
  }

  if (component == null) {
    return (
      <NotFound {...props} componentProps={{ $Component: String(component) }} />
    );
  } else if (typeof component === 'string') {
    if (component === 'hidden') {
      return <Hidden {...props} />;
    }
    const Comp = COMPONENT_DICT[component];
    if (Comp == null) {
      return <NotFound {...props} componentProps={{ $Component: component }} />;
    }

    return React.createElement(Comp, props);
  } else {
    return (
      <AnonymousFormItem
        {...props}
        componentProps={{ ...props.componentProps, $Component: component }}
      />
    );
  }
}

FormItem.register = (options: FormItemCreationOptions) => {
  COMPONENT_DICT[options.name] = createFormItem(options);
};

FormItem.COMPONENT_DICT = COMPONENT_DICT;
