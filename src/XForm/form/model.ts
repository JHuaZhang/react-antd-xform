import { makeObservable, observable } from 'mobx';
import { composeValue } from '../utils';

export class FormModel<D> {
  _values: D;
  constructor(initValues?: D) {
    if (initValues === null) {
      console.warn('[form] FormModel 根节点的初始 values 不能为 null');
    }
    this._values = composeValue(initValues, {} as any);

    makeObservable(this, {
      _values: observable,
    });
  }

  get values(): D {
    return this._values;
  }

  set values(nextValues: D) {
    this._values = nextValues;
  }
}
