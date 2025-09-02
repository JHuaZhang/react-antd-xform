import React, { useContext, useState } from 'react';
import { composeValue } from '../../Form/common-utils';
import { FormModel } from './model';
export { FormModel };

export interface FormProps {
  children: React.ReactNode;
  model?: FormModel;
}

export const ModelContext = React.createContext<FormModel<any> | null>(null);
ModelContext.displayName = 'ModelContext';
const ModelProvider = ModelContext.Provider;

export function useModel<T = any>() {
  return useContext(ModelContext) as FormModel<T>;
}

/**
 * 表单
 */
export function Form({ children, model: modelProp }: FormProps) {
  const [_model] = useState(() => new FormModel({}));
  const model = composeValue(modelProp, _model);
  console.log(model, '====model====');

  return <ModelProvider value={model}>{children}</ModelProvider>;
}
