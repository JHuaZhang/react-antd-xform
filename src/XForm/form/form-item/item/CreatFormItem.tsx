import { observer } from 'mobx-react-lite';
import React from 'react';
import { FormItemComponentProps } from '../../../../Form/form-item';
import { FormItemView } from '../../form-ui';

function processCreationOptions(options: FormItemCreationOptions) {
  const render =
    options.render ??
    ((props) =>
      React.createElement(
        options.component as React.ComponentType<FormItemComponentProps>,
        props,
      ));
  return {
    ...options,
    render,
  };
}

export interface FormItemCreationOptions {
  /** 名称 */
  name: string;

  /** 是否为隐藏元素 */
  hidden?: boolean;

  /** 组件 */
  component?: React.ComponentType<FormItemComponentProps>;

  /** FormItem元素的id属性 */
  htmlId?: string;

  /** 控件渲染方法，与 component 参数二选一，优先级高于 component */
  render?: (props: FormItemComponentProps) => React.ReactElement;

  /** 组件类型默认的空值判断方法 */
  isEmpty?: (value: any) => boolean;

  /** 默认值 */
  defaultValue?: any;
}

export const createFormItem = (inputOptions: FormItemCreationOptions) => {
  const options = processCreationOptions(inputOptions);

  function FormItemComponent(props: FormItemComponentProps) {
    if (options.hidden) {
      return null;
    }
    return <FormItemView {...props}>{options.render(props)}</FormItemView>;
  }
  FormItemComponent.displayName = `FormItem__${options.name}`;
  return observer(FormItemComponent);
};
