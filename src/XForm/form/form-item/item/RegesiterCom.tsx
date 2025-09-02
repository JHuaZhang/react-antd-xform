/**
 * @description 注册antd组件
 */
/* eslint-disable eqeqeq */
import { Checkbox, Input, Radio } from 'antd';
export const XInput = (props) => {
  return (
    <Input
      {...props}
      onChange={(e) => {
        props?.onChange?.(e.target.value);
      }}
    />
  );
};

const isFalsy = (value) => value == null || value === '' || value === false;
const isNullOrUndefined = (value) => value == null;

export const ALL_COMPONENTS = [
  {
    name: 'checkbox',
    component: Checkbox,
    valuePropName: 'checked',
    renderPreview: () => <div>test</div>,
    defaultValue: false,
    isEmpty: isNullOrUndefined,
  },
  {
    name: 'checkboxGroup',
    component: Checkbox.Group,
    defaultValue: [],
    isEmpty(value) {
      return value == null || value.length === 0;
    },
  },
  {
    name: 'radioGroup',
    aliases: ['radio'],
    component: Radio.Group,
    defaultValue: null,
    isEmpty: isNullOrUndefined,
  },

  {
    name: 'input',
    component: XInput,
    defaultValue: '',
    isEmpty: isFalsy,
    hasIntrinsicWidth: false,
  },
  {
    name: 'textArea',
    component: Input.TextArea,
    defaultValue: '',
    isEmpty: isFalsy,
    hasIntrinsicWidth: false,
  },
];
