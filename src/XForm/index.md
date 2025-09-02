# XForm 学习目录

```jsx
import React from 'react';
import { Form, FormModel, FormItem } from './test';
// import { ValuePreview } from '../Form/ValuePreview';
import { observer } from 'mobx-react-lite';

export default observer(() => {
  const model1 = new FormModel({
    name: '123',
  });
  console.log(model1.values, '0000');
  return (
    <Form model={model1}>
      <FormItem name="name" component="input" label="姓名" />
    </Form>
  );
});
```
