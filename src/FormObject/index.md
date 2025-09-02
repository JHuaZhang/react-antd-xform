# FormObject

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
} from '../Form';
import { Button, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { ValuePreview, AppendButton } from '../Form/ValuePreview';
import { XInput } from '../Form/default-component';

export default observer(() => {
  const model1 = new FormModel({
    list: {
      name: '李四',
      phone: '188-8888-8888',
      address: {
        prov: '浙江省',
        city: '杭州市',
      },
    },
    list2: {
      name: '张三',
      phone: '188-8888-8888',
      address: {
        prov: '浙江省',
        city: '杭州市',
      },
    },
  });

  const listModel = model1.getSubModel('list');

  return (
    <Form model={model1}>
      <Form.Object name="list">
        <div style={{ border: '1px solid #ccc', padding: 8, marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div> 李四</div>
          </div>
          <FormItem component={'input'} label="姓名" name="name" required />
          <FormItem component={'input'} label="电话" name="phone" required />
          <Form.Object name="address">
            <FormItem component={'input'} label="省份" name="prov" required />
            <FormItem component={'input'} label="城市" name="city" required />
          </Form.Object>
        </div>
      </Form.Object>
      <Form.Object name="list2">
        <div style={{ border: '1px solid #ccc', padding: 8, marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div> 张三</div>
          </div>
          <FormItem component={'input'} label="姓名" name="name" required />
          <FormItem component={'input'} label="电话" name="phone" required />
          <FormItem
            component={'input'}
            label="省份"
            name="address.prov"
            required
          />
          <FormItem
            component={'input'}
            label="城市"
            name="address.city"
            required
          />
        </div>
      </Form.Object>

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
