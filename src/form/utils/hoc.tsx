// 实现一个高阶函数 接受一个组件 将组件的 onChange: (e: any) => void 转换为 (nextValue: any) => void
import React from 'react';

export function hoc(com: React.ReactElement<any>) {
  return (props: any) => {
    return React.cloneElement(com as React.ReactElement, {
      ...props,
      onChange: (e: any) => {
        props.onChange(e.target.value);
      },
    });
  };
}
