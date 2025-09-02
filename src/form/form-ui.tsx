/* eslint-disable eqeqeq */
import { Button, theme, Tooltip } from 'antd';
import cx from 'classnames';
import { action } from 'mobx';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useFormEnv, useModel } from './form';
import { modelUtils, SubmitExtraOptions } from './model-utils';

export function asCSSLength(len: number | string) {
  return typeof len === 'number' ? `${len}px` : len;
}

export const FormLayoutContainer = styled.div`
  --label-width: auto;
  --control-width: auto;
  --form-item-gap: 0;

  .form-item {
    margin-bottom: var(--form-item-gap);
    line-height: 1.5;

    &.auto-control-width {
      --control-width: auto;
    }
  }

  .form-item-label {
    display: block;
  }

  .form-item-label-text {
    color: ${theme.colors?.text?.subtitle ?? '#666'};
  }

  .form-item.minimal {
    margin-bottom: 0;

    > .error-message,
    > .form-item-label {
      display: none;
    }
  }

  &.horizontal {
    .form-item {
      display: flex;
      align-items: flex-start;
    }

    .form-item-label {
      flex: 0 0 var(--label-width);
      padding-top: 8px;
      padding-right: 12px;
      text-align: right;
    }
  }

  .form-item.form-item-hidden {
    display: none;
  }

  &.vertical {
    .form-item-label {
      font-size: 12px;
      margin-bottom: 4px;
    }
  }

  &.inline-error .error-message {
    position: absolute;
    right: 0;
    top: -24px;
  }

  .form-item-preview {
    > .form-item-label {
      padding-top: 0;
    }
  }

  .required-indicator {
    margin-right: 4px;
    color: #eb4141;
  }

  .required-indicator::before {
    content: '*';
  }

  .error-message {
    margin-top: 2px;
    color: #eb4141;
  }

  .tip {
    margin-left: 4px;
    color: #999;
  }

  .help {
    color: #999999;
    margin-top: 4px;
  }

  .form-item-control {
    position: relative;
    width: var(--control-width);

    > .next-input,
    > .next-select {
      width: 100%;
    }

    > .next-range {
      margin: 8px 0;
    }

    > .next-rating {
      margin-top: 4px;
      margin-bottom: 2px;
    }

    > .next-checkbox-group,
    > .next-radio-group,
    > .next-checkbox-wrapper {
      display: inline-block;
      line-height: 18px;
    }
  }

  &.horizontal .form-item-control {
    > .next-checkbox-group,
    > .next-radio-group,
    > .next-checkbox-wrapper {
      padding-top: 8px;
    }
  }
`;

export interface FormLayoutParams {
  /** 标签位置，可选 'left' 或 'top'  */
  labelPosition?: 'left' | 'top';

  /** 标签宽度 */
  labelWidth?: string | number;

  /** 控件宽度 */
  controlWidth?: string | number;

  /** 两个 form item 之间的间距 */
  formItemGap?: string | number;

  /** labelPosition=top 时，是否内联展示 error 消息 */
  inlineError?: boolean;
}

export interface FormLayoutProps extends Partial<FormLayoutParams> {
  style?: React.CSSProperties;
  className?: string;
  children?: ReactNode;
  containerProps?: any;
}

export function FormLayout({
  children,
  className,
  style,
  labelPosition = 'left',
  labelWidth = labelPosition === 'left' ? 120 : 'auto',
  formItemGap = labelPosition === 'left' ? 12 : 16,
  controlWidth = 320,
  inlineError,
  containerProps,
}: FormLayoutProps) {
  return (
    <FormLayoutContainer
      style={
        {
          '--label-width': asCSSLength(labelWidth),
          '--control-width': asCSSLength(controlWidth),
          '--form-item-gap': asCSSLength(formItemGap),
          ...style,
        } as any
      }
      className={cx(
        'xform-container',
        {
          horizontal: labelPosition === 'left',
          vertical: labelPosition === 'top',
          'inline-error': labelPosition === 'top' && inlineError,
        },
        className,
      )}
      {...containerProps}
    >
      {children}
    </FormLayoutContainer>
  );
}

const FormItemGroupDiv = styled.div`
  ${FormLayoutContainer}.horizontal & {
    display: flex;
  }

  &.inline {
    .form-item-group-content {
      display: flex;
    }
  }
`;

/** @deprecated 请使用 Form.ItemView 代替 ItemGroup */
export interface FormItemGroupProps {
  label?: React.ReactNode;
  tip?: React.ReactNode;
  asterisk?: boolean;
  children?: React.ReactNode;
  labelWidth?: number | string;
  controlWidth?: number | string;
  className?: string;
  style?: React.CSSProperties;
  inline?: boolean;
}

/** @deprecated 请使用 Form.ItemView 代替 ItemGroup */
export const FormItemGroup = ({
  label,
  asterisk,
  tip,
  children,
  labelWidth,
  controlWidth,
  className,
  style,
  inline,
}: FormItemGroupProps) => {
  const { isPreview } = useFormEnv();

  return (
    <FormItemGroupDiv
      className={cx(
        'form-item-group',
        { inline, 'form-item-preview': isPreview },
        className,
      )}
      style={style}
    >
      {label == null && tip == null ? null : (
        <div className="form-item-label">
          {asterisk && <span className="required-indicator" />}
          {label && <span className="form-item-label-text">{label}</span>}
          {/* {tip && <Tip title={tip} />} */}
        </div>
      )}

      <div
        className="form-item-group-content"
        style={
          {
            '--label-width': asCSSLength(labelWidth),
            '--control-width': asCSSLength(controlWidth),
          } as any
        }
      >
        {children}
      </div>
    </FormItemGroupDiv>
  );
};

const Tip = ({ align, title }: { align?: any; title?: React.ReactNode }) => (
  <Tooltip
    trigger={'hover'} //<Icon type="prompt" size="xs" className="tip" />
    closable={false}
    triggerType="hover"
    align={align}
  >
    {title}
  </Tooltip>
);

export interface FormItemViewProps {
  /** `<label />` 的 id 属性 */
  htmlId?: string;

  /** 标签 */
  label?: React.ReactNode;

  /** 帮助文本 */
  help?: React.ReactNode;

  /** 提示信息 */
  tip?: React.ReactNode;

  /** 是否展示「*」 */
  asterisk?: boolean;

  /** 错误信息 */
  error?: React.ReactNode;

  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;

  /** 标签宽度 */
  labelWidth?: string | number;

  /** 标签内联样式 */
  labelStyle?: React.CSSProperties;

  /** 控件宽度 */
  controlWidth?: string | number;

  /** 控件内联样式 */
  controlStyle?: React.CSSProperties;

  /** 在控件右侧添加自定义内容 */
  rightNode?: React.ReactNode;
}

export function FormItemView({
  htmlId,
  label = '',
  help,
  tip,
  asterisk,
  error,
  children,
  className,
  style,
  labelWidth,
  controlWidth,
  rightNode,
  labelStyle,
  controlStyle,
}: FormItemViewProps) {
  return (
    <div
      data-xform-id={htmlId}
      className={cx('form-item', className)}
      style={
        {
          '--label-width': asCSSLength(labelWidth),
          '--control-width': asCSSLength(controlWidth),
          ...style,
        } as any
      }
    >
      {label == null && tip == null ? null : (
        <label className="form-item-label" htmlFor={htmlId} style={labelStyle}>
          {asterisk && <span className="required-indicator" />}
          {label && <span className="form-item-label-text">{label}</span>}
          {tip && <Tip title={tip} />}
        </label>
      )}

      <div className="form-item-control" style={controlStyle}>
        {children}
        {help && <div className="help">{help}</div>}
        {error && <div className="error-message">{error}</div>}
      </div>

      {rightNode}
    </div>
  );
}

export type ButtonProps = React.PropsWithChildren<
  React.ComponentProps<typeof Button>
>;

export function FormSubmit({
  type = 'primary',
  children = '提交',
  valueFilter,
  mergeDefaultValue,
  animateErrorFields,
  scrollToFirstError,
  ...props
}: ButtonProps & SubmitExtraOptions) {
  const model = useModel();
  const { onSubmit, onError } = useFormEnv();

  const submitOptions = {
    onSubmit,
    onError,
    valueFilter,
    mergeDefaultValue,
    animateErrorFields,
    scrollToFirstError,
  };

  return (
    <Button
      onClick={() => modelUtils.submit(model, submitOptions)}
      type={type}
      children={children}
      {...props}
      className={cx('form-submit-button', props.className)}
    />
  );
}

export function FormReset({ children = '重置', ...props }: ButtonProps) {
  const model = useModel();
  const formEnv = useFormEnv();

  return (
    <Button
      onClick={action(() => modelUtils.reset(model, formEnv))}
      children={children}
      {...props}
      className={cx('form-reset-button', props.className)}
    />
  );
}
