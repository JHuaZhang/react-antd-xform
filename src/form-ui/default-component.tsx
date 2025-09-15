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
  withColorPickerHandler,
} from './common-utils';
import { FormItemCreationOptions } from '../form/type';

// 👇 引入所有预览函数
import {
  useValueToPreview,
  useDatePreview,
  useDateRangePreview,
  useTimePreview,
  useTimeRangePreview,
  useMultiplePreview,
  useBooleanPreview,
  useRatePreview,
  useColorPreview,
} from './render-preview';

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
// 2. 默认值映射
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
// 3. 组件规则配置：指定 HOC 和 renderPreview
// ======================
const COMPONENT_RULES: {
  [K in keyof typeof COMPONENT_MAP]: {
    hocs: Array<
      | 'valueChange'
      | 'dayjsDate'
      | 'dayjsDateRange'
      | 'dayjsTime'
      | 'dayjsTimeRange'
      | 'multiSelect'
      | 'colorPicker'
    >;
    renderPreview: (value: any) => React.ReactNode;
    hasIntrinsicWidth: boolean;
  };
} = {
  input: {
    hocs: ['valueChange'],
    renderPreview: useValueToPreview,
    hasIntrinsicWidth: false,
  },
  textArea: {
    hocs: ['valueChange'],
    renderPreview: useValueToPreview,
    hasIntrinsicWidth: true,
  },
  select: {
    hocs: [],
    renderPreview: useValueToPreview,
    hasIntrinsicWidth: true,
  },
  singleSelect: {
    hocs: [],
    renderPreview: useValueToPreview,
    hasIntrinsicWidth: true,
  },
  multiSelect: {
    hocs: ['multiSelect'],
    renderPreview: useMultiplePreview,
    hasIntrinsicWidth: true,
  },
  radio: {
    hocs: ['valueChange'],
    renderPreview: useValueToPreview,
    hasIntrinsicWidth: false,
  },
  checkbox: {
    hocs: [],
    renderPreview: useMultiplePreview,
    hasIntrinsicWidth: false,
  },
  inputNumber: {
    hocs: ['valueChange'],
    renderPreview: useValueToPreview,
    hasIntrinsicWidth: false,
  },
  slider: {
    hocs: ['valueChange'],
    renderPreview: useValueToPreview,
    hasIntrinsicWidth: false,
  },
  switch: {
    hocs: ['valueChange'],
    renderPreview: useBooleanPreview,
    hasIntrinsicWidth: false,
  },
  datePicker: {
    hocs: ['dayjsDate'],
    renderPreview: useDatePreview,
    hasIntrinsicWidth: true,
  },
  dateRangePicker: {
    hocs: ['dayjsDateRange'],
    renderPreview: useDateRangePreview,
    hasIntrinsicWidth: true,
  },
  timePicker: {
    hocs: ['dayjsTime'],
    renderPreview: useTimePreview,
    hasIntrinsicWidth: true,
  },
  timeRangePicker: {
    hocs: ['dayjsTimeRange'],
    renderPreview: useTimeRangePreview,
    hasIntrinsicWidth: true,
  },
  rate: {
    hocs: [],
    renderPreview: useRatePreview,
    hasIntrinsicWidth: false,
  },
  colorPicker: {
    hocs: ['colorPicker'],
    renderPreview: useColorPreview,
    hasIntrinsicWidth: false,
  },
};

// ======================
// 4. 构建 ALL_COMPONENTS
// ======================
type ComponentKey = keyof typeof COMPONENT_MAP;

const ALL_COMPONENTS = (Object.keys(COMPONENT_MAP) as ComponentKey[]).map((name) => {
  let component: any = COMPONENT_MAP[name];
  const rule = COMPONENT_RULES[name];

  // 应用 HOCs
  rule.hocs.forEach((hoc) => {
    switch (hoc) {
      case 'valueChange':
        component = withValueChangeHandler(component);
        break;
      case 'dayjsDate':
        component = withDayjsTransformAntdDate(component);
        break;
      case 'dayjsDateRange':
        component = withDayjsTransformAntdDateRangePicker(component);
        break;
      case 'dayjsTime':
        component = withDayjsTransformAntdTime(component);
        break;
      case 'dayjsTimeRange':
        component = withDayjsTransformAntdTimeRange(component);
        break;
      case 'multiSelect':
        component = withInjectedProps({ mode: 'multiple' })(component);
        break;
      case 'colorPicker':
        component = withColorPickerHandler(component);
        break;
    }
  });

  return {
    name,
    component,
    defaultValue: DEFAULT_VALUES[name],
    isEmpty: isEmptyValue,
    hasIntrinsicWidth: rule.hasIntrinsicWidth,
    renderPreview: (props) => rule.renderPreview(props.value),
  };
}) satisfies FormItemCreationOptions[];

export { ALL_COMPONENTS };
