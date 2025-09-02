import React from 'react';
import {
  AnonymousFormItem,
  COMPONENT_DICT,
  Hidden,
  NotFound,
} from './UtilFormItem';

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

interface FormItemProps {
  value?: any;
  onChange?(nextValue: any): void;
  onFocus?(): void;
  onBlur?(): void;
  component: React.ComponentType<any>;
  componentProps?: any;
}

export function FormItem({ component, ...props }: FormItemProps) {
  if (!component) {
    return <NotFound {...props} />;
  } else if (typeof component === 'string') {
    if (component === 'hidden') {
      return <Hidden {...props} />;
    }
    // 获取已经注册的组件
    const RegCom = COMPONENT_DICT[component];
    if (!RegCom) {
      return <NotFound {...props} componentProps={{ $Component: component }} />;
    }
    return React.createElement(RegCom, props);
  } else {
    return (
      <AnonymousFormItem
        {...props}
        componentProps={{ ...props.componentProps, $Component: component }}
      />
    );
  }
}
