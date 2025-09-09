import { Button, ConfigProvider } from 'antd';
import { observer } from 'mobx-react-lite';
import { Form, FormItem, FormModel } from '../../index';
import { ValuePreview } from '../components/ValuePreview';
import zhCN from 'antd/es/locale/zh_CN';
import '../index.css';

export default {
  title: 'XForm/基本用法',
  component: Form,
};

const ObservableFormExample = observer(() => {
  const model = new FormModel({
    name: '',
    introduce: '我是张三，我来自湖北',
    date: '2025-09-17',
  });
  return (
    <ConfigProvider locale={zhCN}>
      <div className="title">基本用法</div>
      <div className="container">
        <Form model={model} onSubmit={(values) => console.log(values)}>
          <FormItem component="input" label="input表单" name="name" required />
          <FormItem
            component="textArea"
            label="textArea"
            labelStyle={{ marginTop: -4 }}
            name="introduce"
            required
          />
          <FormItem
            defaultValue="jack"
            component="select"
            label="select单选"
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
            writeDefaultValueToModel={true}
            name="friend"
            required
            componentProps={{
              style: { width: '100%' },
            }}
          />
          <FormItem
            defaultValue={['book']}
            component="multiSelect"
            label="select多选"
            options={[
              { value: 'book', label: '读书' },
              { value: 'study', label: '学习' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
            writeDefaultValueToModel={true}
            name="likes"
            required
            componentProps={{
              style: { width: '100%' },
              mode: 'multiple',
            }}
          />
          <FormItem
            component="radio"
            labelStyle={{ marginTop: -4 }}
            label="radio单选"
            options={[
              { value: 'male', label: '男' },
              { value: 'female', label: '女' },
            ]}
            defaultValue="male"
            writeDefaultValueToModel={true}
            name="gender"
            required
          />
          <FormItem
            component="radio"
            labelStyle={{ marginTop: -4 }}
            label="radio单选"
            options={[
              { value: 'male', label: '男' },
              { value: 'female', label: '女' },
            ]}
            optionType="button"
            defaultValue="male"
            writeDefaultValueToModel={true}
            componentProps={{
              optionType: 'button',
            }}
            name="gender"
            required
          />
          <FormItem
            component="checkbox"
            defaultValue={['apple']}
            writeDefaultValueToModel={true}
            label="checkbox多选"
            labelStyle={{ marginTop: -4 }}
            options={[
              { value: 'apple', label: '苹果' },
              { value: 'banana', label: '香蕉' },
            ]}
            name="fruits"
            required
          />
          <FormItem
            component="inputNumber"
            defaultValue={1}
            writeDefaultValueToModel={true}
            label="数字表单"
            name="numbers"
            required
            componentProps={{
              min: 0,
              max: 10,
            }}
          />
          <FormItem
            component="slider"
            defaultValue={80}
            writeDefaultValueToModel={true}
            label="slider进度条"
            name="slider"
            required
          />
          <FormItem
            component="switch"
            defaultValue={true}
            writeDefaultValueToModel={true}
            label="switch开关"
            name="switch"
            required
          />
          <FormItem
            component="datePicker"
            writeDefaultValueToModel={true}
            label="日期选择"
            name="date"
            componentProps={{
              style: { width: '100%' },
              picker: 'date',
            }}
            required
          />
          <FormItem
            component="dateRangePicker"
            writeDefaultValueToModel={true}
            label="日期区间选择"
            name="dateRange"
            componentProps={{
              style: { width: '100%' },
              picker: 'date',
            }}
            required
          />
          <FormItem
            component="timePicker"
            writeDefaultValueToModel={true}
            label="时间选择"
            name="time"
            componentProps={{
              style: { width: '100%' },
            }}
            required
          />
          <FormItem
            component="timeRangePicker"
            writeDefaultValueToModel={true}
            label="时间区间选择"
            name="timeRange"
            componentProps={{
              style: { width: '100%' },
            }}
            required
          />
          <FormItem
            component="rate"
            writeDefaultValueToModel={true}
            label="rate评分"
            name="rate"
            labelStyle={{ marginTop: -6 }}
            componentProps={{
              style: { width: '100%' },
            }}
            required
          />
          <FormItem
            component="colorPicker"
            writeDefaultValueToModel={true}
            label="colorPicker"
            name="colorPicker"
            componentProps={{
              returnType: 'hex',
            }}
            labelStyle={{ marginTop: -6 }}
            required
          />
          <Form.Submit ButtonComponent={Button} type="primary">
            提交
          </Form.Submit>
          <Form.FormReset ButtonComponent={Button}>重置</Form.FormReset>
          <ValuePreview defaultShow={true} />
        </Form>
      </div>
    </ConfigProvider>
  );
});

export const BaseForm = () => <ObservableFormExample />;
