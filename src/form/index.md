# Form

This is an example component.

```jsx
import React from 'react';
import {
  Form,
  FormModel,
  FormItem,
  FormArray,
  modelUtils,
  arrayHelpers,
} from './index';
import { Button, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { ValuePreview, AppendButton } from './ValuePreview';
import { XInput } from './default-component';

export default observer(() => {
  const model1 = new FormModel({
    name: '张三',
    phone: '188-8888-8888',
    address: '杭州市余杭区文一西路969号',
  });

  const listModel = model1.getSubModel('list');

  return (
    <Form model={model1}>
      <FormItem component={'input'} label="姓名" name="name" required />
      <FormItem component={'input'} label="电话" name="phone" required />
      <FormItem component={XInput} label="地址" name="address" required />
      <div style={{ marginTop: 8 }}>
        <Button
          type="primary"
          onClick={async () => {
            const res = await modelUtils.validateAll(model1);
          }}
        >
          提交
        </Button>
      </div>
      <ValuePreview />
    </Form>
  );
});
```
