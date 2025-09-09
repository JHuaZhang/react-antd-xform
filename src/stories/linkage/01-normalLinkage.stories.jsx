import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { Form, FormItem, FormModel } from '../../index';
import { ValuePreview } from '../components/ValuePreview';

export default {
  title: 'XForm/表单联动',
  component: Form,
};

const model = new FormModel({ prov: '', cities: [] });
const prov = model.getField('prov');
const cities = model.getField('cities');
console.log(cities, 'cities');
const ALL_CITIES = [
  { prov: '浙江', cities: '杭州、绍兴、宁波、嘉兴、其他'.split('、') },
  { prov: '江苏', cities: '南京、常州、镇江、苏州、其他'.split('、') },
  { prov: '福建', cities: '厦门、福州、莆田、三明、其他'.split('、') },
];

const ObservableFormExample = observer(() => {
  return (
    <div style={{ maxWidth: 500 }}>
      <Form model={model} layout={{ inlineError: true }} onSubmit={(values) => console.log(values)}>
        <FormItem
          component="singleSelect"
          label="省份(单选)"
          help="选择一个省份后，将显示城市下拉框"
          options={ALL_CITIES.map((item) => {
            return { value: item.prov, label: item.prov };
          })}
          // 调用onChange会覆盖默认的双向绑定，就需要对prov.value重新进行赋值
          onChange={(value) => {
            prov.value = value;
            cities.value = [];
          }}
          field={prov}
          componentProps={{
            style: { width: '200px' },
          }}
        />
        <FormItem
          component="multiSelect"
          label="城市(多选)"
          field={cities}
          options={ALL_CITIES.find((item) => item.prov === prov.value)?.cities.map((item) => {
            return { value: item, label: item };
          })}
          componentProps={{
            style: { width: '200px' },
          }}
        />
        <Form.Submit ButtonComponent={Button} type="primary">
          提交
        </Form.Submit>
        <Form.FormReset ButtonComponent={Button}>重置</Form.FormReset>
        <ValuePreview defaultShow={true} />
      </Form>
    </div>
  );
});

export const NormalLinkage = () => <ObservableFormExample />;
