/** 合并两个值，如果第一个不为 undefined，则使用第一个值，否则使用第二个值 */
export function composeValue<T>(first: T, second: T) {
  if (first !== undefined) {
    return first;
  }
  return second;
}
