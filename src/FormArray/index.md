# FormArray

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
    list: [
      {
        name: '张三',
        phone: '188-8888-8888',
      },
      {
        name: '李四',
        phone: '188-8888-8888',
      },
    ],
  });

  const listModel = model1.getSubModel('list');

  return (
    <Form model={model1}>
      <Form.Array name="list">
        {(itemIndex, arrayModel, itemContent) => {
          return (
            <div
              style={{ border: '1px solid #ccc', padding: 8, marginBottom: 8 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div> 偶像 - {itemIndex + 1}</div>
                <div>
                  <Button
                    type="link"
                    onClick={() =>
                      arrayHelpers.delete(model1.getSubModel('list'), itemIndex)
                    }
                  >
                    删除
                  </Button>
                </div>
              </div>
              <FormItem component={'input'} label="姓名" name="name" required />
              <FormItem
                component={'input'}
                label="电话"
                name="phone"
                required
              />
            </div>
          );
        }}
      </Form.Array>
      <AppendButton
        name="list"
        itemFactory={{
          name: `xxx`,
          phone: '188-8888-8888-2',
        }}
      />
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
