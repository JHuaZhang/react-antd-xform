import cx from 'classnames';
import styled from 'styled-components';
import { asCSSLength } from '../common-utils';
import { FormLayoutProps } from '../type';

const FormLayoutContainer = styled.div`
  --label-width: auto;
  --control-width: auto;
  --form-item-gap: 0;
  --form-item-label-top-position: 0;

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
    color: #666;
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
      padding-top: var(--form-item-label-top-position);
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

export function FormLayout({
  children,
  className,
  style,
  labelPosition = 'left',
  labelWidth = labelPosition === 'left' ? 120 : 'auto',
  formItemGap = labelPosition === 'left' ? 12 : 16,
  controlWidth = 320,
  defaultLabelTopPosition = 4,
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
          '--form-item-label-top-position': asCSSLength(defaultLabelTopPosition),
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
        className
      )}
      {...containerProps}
    >
      {children}
    </FormLayoutContainer>
  );
}
