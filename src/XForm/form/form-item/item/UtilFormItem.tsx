/**
 * @description 注册工具组件
 */
import stringifyObject from 'stringify-object';
import { FormItemComponentProps } from '.';
import { createFormItem } from './CreatFormItem';
import { ALL_COMPONENTS } from './RegesiterCom';

export const Hidden = createFormItem({
  name: 'hidden',
  hidden: true,
  // hasIntrinsicWidth: false,
  defaultValue: undefined,
  isEmpty() {
    return false;
  },
  render({ id, value }) {
    return <input type="hidden" value={stringifyObject(value)} id={id} />;
  },
});

export const NotFound = createFormItem({
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
        <code>{`&lt;FormItem component=${$Component} /&gt;`}</code>
        没有找到对应组件，请检查组件名称是否拼写正确`
      </div>
    );
  },
});

export const AnonymousFormItem = createFormItem({
  name: 'anonymous',
  render({ $Component: Component, ...props }: FormItemComponentProps) {
    return <Component {...props} />;
  },
});

export const COMPONENT_DICT: { [name: string]: React.FunctionComponent<any> } =
  {};
for (const config of ALL_COMPONENTS) {
  const Component = createFormItem(config);
  COMPONENT_DICT[config.name] = Component;
  if (config.aliases) {
    for (const alias of config.aliases) {
      COMPONENT_DICT[alias] = Component;
    }
  }
}
