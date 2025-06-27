import cx from 'classnames';
import { Button } from 'antd';
import { modelUtils } from '../form/model-utils';
import { SubmitExtraOptions } from '../form/type';
import { useModel } from '../form/context/modelContext';
import { useFormEnv } from '../form/context/formEnvContext';
import { ButtonProps } from './type';

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
