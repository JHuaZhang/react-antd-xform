import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { Form, FormItem, FormModel, arrayHelpers } from '../../index';
import AppendButton from '../components/AppendButton';
import { ValuePreview } from '../components/ValuePreview';

export default {
  title: 'XForm/基本用法',
  component: Form,
};

const ObservableFormExample = observer(() => {
  const model = new FormModel({
    list: [
      {
        name: '张三',
        phone: '188-8888-8888',
      },
      {
        name: '李四',
        phone: '199-9999-9999',
      },
    ],
  });
  return (
    <div style={{ maxWidth: 500 }}>
      <Form model={model} layout={{ inlineError: true }} onSubmit={(values) => console.log(values)}>
        <Form.Array name="list">
          {(itemIndex, arrayModel, itemContent) => {
            return (
              <div style={{ border: '1px solid #ccc', padding: 8, marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div> 偶像 - {itemIndex + 1}</div>
                  <div>
                    <Button
                      type="link"
                      onClick={() => arrayHelpers.delete(model.getSubModel('list'), itemIndex)}
                    >
                      删除
                    </Button>
                  </div>
                </div>
                <FormItem component="input" label="姓名" name="name" required />
                <FormItem component="input" label="电话" name="phone" required />
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
        <ValuePreview defaultShow={true} />
      </Form>
    </div>
  );
});

export const ArrayForm = () => <ObservableFormExample />;
