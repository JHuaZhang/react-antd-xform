import {
  Input,
  Select,
  Radio,
  Checkbox,
  InputNumber,
  Slider,
  Switch,
  DatePicker,
  TimePicker,
  Rate,
  ColorPicker,
} from 'antd';

import {
  isEmptyValue,
  withValueChangeHandler,
  withInjectedProps,
  withDayjsTransformAntdDate,
  withDayjsTransformAntdDateRangePicker,
  withDayjsTransformAntdTime,
  withDayjsTransformAntdTimeRange,
} from './common-utils';
import { FormItemCreationOptions } from '../form/type';

// ======================
// 1. 基础组件映射表
// ======================
const COMPONENT_MAP = {
  input: Input,
  textArea: Input.TextArea,
  select: Select,
  singleSelect: Select,
  multiSelect: Select,
  radio: Radio.Group,
  checkbox: Checkbox.Group,
  inputNumber: InputNumber,
  slider: Slider,
  switch: Switch,
  datePicker: DatePicker,
  dateRangePicker: DatePicker.RangePicker,
  timePicker: TimePicker,
  timeRangePicker: TimePicker.RangePicker,
  rate: Rate,
  colorPicker: ColorPicker,
} as const;

// ======================
// 2. 高阶函数应用规则（按组件类型分组）
// ======================
const HOC_RULES = {
  // 需要withValueChangeHandler的组件
  withValueChangeHandler: [
    'input',
    'textArea',
    'radio',
    'inputNumber',
    'slider',
    'switch',
  ] as const,
  // 需要日期转换（Day.js）的组件
  withDayjsTransformAntdDate: ['datePicker'] as const,
  withDayjsTransformAntdDateRangePicker: ['dateRangePicker'] as const,
  withDayjsTransformAntdTime: ['timePicker'] as const,
  withDayjsTransformAntdTimeRange: ['timeRangePicker'] as const,
  // 多选下拉框
  multiSelect: ['multiSelect'] as const,
};

// ======================
// 3. 默认值映射
// ======================
const DEFAULT_VALUES: { [K in keyof typeof COMPONENT_MAP]: any } = {
  input: '',
  textArea: '',
  select: '',
  singleSelect: '',
  multiSelect: [],
  radio: '',
  checkbox: [],
  inputNumber: null,
  slider: null,
  switch: false,
  datePicker: null,
  dateRangePicker: null,
  timePicker: null,
  timeRangePicker: null,
  rate: 0,
  colorPicker: '',
};

// ======================
// 4. 生成 ALL_COMPONENTS（关键：用 any 中间过渡）
// ======================
type ComponentKey = keyof typeof COMPONENT_MAP;

const ALL_COMPONENTS = (Object.keys(COMPONENT_MAP) as ComponentKey[]).map((name) => {
  let component: any = COMPONENT_MAP[name];
  // 应用对应的HOC
  if ((HOC_RULES.withValueChangeHandler as readonly ComponentKey[]).includes(name)) {
    component = withValueChangeHandler(component);
  }
  if ((HOC_RULES.withDayjsTransformAntdDate as readonly ComponentKey[]).includes(name)) {
    component = withDayjsTransformAntdDate(component);
  }
  if ((HOC_RULES.withDayjsTransformAntdDateRangePicker as readonly ComponentKey[]).includes(name)) {
    component = withDayjsTransformAntdDateRangePicker(component);
  }
  if ((HOC_RULES.withDayjsTransformAntdTime as readonly ComponentKey[]).includes(name)) {
    component = withDayjsTransformAntdTime(component);
  }
  if ((HOC_RULES.withDayjsTransformAntdTimeRange as readonly ComponentKey[]).includes(name)) {
    component = withDayjsTransformAntdTimeRange(component);
  }
  if ((HOC_RULES.multiSelect as readonly ComponentKey[]).includes(name)) {
    component = withInjectedProps({ mode: 'multiple' })(component);
  }

  return {
    name,
    component,
    defaultValue: DEFAULT_VALUES[name],
    isEmpty: isEmptyValue,
    hasIntrinsicWidth: false,
  };
}) satisfies FormItemCreationOptions[];
export { ALL_COMPONENTS };
