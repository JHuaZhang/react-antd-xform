---
title: Form.Submit介绍
order: 3
nav:
  title: 使用文档
  order: 1
---

# Form.Submit

表单提交按钮，点击时...

- 触发所有字段的校验。
- 如果校验通过，则调用 Form 的 onSubmit(submitValues, model)。
- 如果发生错误，则调用 Form 的 onSubmit(erros, model)。


## 举例使用

```tsx
import React from 'react';
import { Form, FormModel, FormItem } from 'react-antd-xform';
import { Button } from 'antd';
import ValuePreview from '../components/ValuePreview.tsx'

const XFormTest = () => {
  const model = new FormModel({
    name: '44444',
    introduce: '我是张三，我来自湖北',
  });
  return (
    <Form model={model} onSubmit={(values) => console.log(values)}>
      <FormItem component="input" label="input表单" name="name" required />
      <FormItem component="textArea" label="textArea" name="introduce" required />
      <Form.Submit ButtonComponent={Button} type="primary">
        提交
      </Form.Submit>
      {/* 只用来实时预览表单中的内容 */}
       <ValuePreview defaultShow={true} />
    </Form>
  );
};

export default XFormTest;

```
