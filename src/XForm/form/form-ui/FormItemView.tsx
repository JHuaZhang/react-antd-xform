export interface FormItemViewProps {
  /** FormItem元素的id属性 */
  htmlId?: string;

  /** 子元素 */
  children: React.ReactNode;
}

export function FormItemView({ htmlId, children }: FormItemViewProps) {
  return <div data-x-form-item={htmlId}>{children}</div>;
}
