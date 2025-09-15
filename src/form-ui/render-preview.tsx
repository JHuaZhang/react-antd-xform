import dayjs from 'dayjs';

/** 通用默认预览 */
export const useValueToPreview = (value: any): React.ReactNode => {
  return value != null && value !== '' ? `${value}` : '--';
};
/** 日期预览 */
export const useDatePreview = (value: any): React.ReactNode => {
  return value ? dayjs(value).format('YYYY-MM-DD') : '--';
};

/** 日期范围预览 */
export const useDateRangePreview = (value: [any, any] | null | undefined): React.ReactNode => {
  if (!Array.isArray(value) || !value[0] || !value[1]) return '--';
  return `${dayjs(value[0]).format('YYYY-MM-DD')} ~ ${dayjs(value[1]).format('YYYY-MM-DD')}`;
};

/** 时间预览 */
export const useTimePreview = (value: any): React.ReactNode => {
  return value ? dayjs(value).format('HH:mm:ss') : '--';
};

/** 时间范围预览 */
export const useTimeRangePreview = (value: [any, any] | null | undefined): React.ReactNode => {
  if (!Array.isArray(value) || !value[0] || !value[1]) return '--';
  return `${dayjs(value[0]).format('HH:mm')} ~ ${dayjs(value[1]).format('HH:mm')}`;
};
/** 多选/标签类预览 */
export const useMultiplePreview = (value: any[]): React.ReactNode => {
  return Array.isArray(value) && value.length > 0 ? value.join(', ') : '--';
};
/** 开关类预览 */
export const useBooleanPreview = (value: boolean): React.ReactNode => {
  return typeof value === 'boolean' ? (value ? '是' : '否') : '--';
};
/** 评分预览 */
export const useRatePreview = (value: number): React.ReactNode => {
  return typeof value === 'number' ? '★'.repeat(value) + '☆'.repeat(5 - value) : '--';
};
/** 颜色预览（返回色块） */
export const useColorPreview = (value: string): React.ReactNode => {
  if (!value) return '--';
  return (
    <span
      style={{
        display: 'inline-block',
        width: 16,
        height: 16,
        border: '1px solid #ddd',
        backgroundColor: value,
        borderRadius: 3,
      }}
    />
  );
};

export const PREVIEW_RENDERERS = {
  useValueToPreview,
  useDatePreview,
  useDateRangePreview,
  useTimePreview,
  useTimeRangePreview,
  useMultiplePreview,
  useBooleanPreview,
  useRatePreview,
  useColorPreview,
} as const;
