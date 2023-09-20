export type ValidationError = {
  text: string,
  additionalData?: object
}

export type ValidationFunction = (
  v: string,
  length?: number
) => ValidationError | true;

/*export const isRequired = (val: string) => !!val || { text: 'Required field' }
export const isValidEmail = (val: string) =>
  /^([\w.%+-]+)@([\w-]+\.)+(\w{2,})$/i.test(val) || { text: 'Invalid email' };
export const minLength = (val: string, length: number) =>
  val.length >= length || { text: 'Min length', additionalData: { length } };
export const maxLength = (val: string, length: number) =>
  val.length <= length || { text: 'Max length', additionalData: { length } };*/

export const isRequired = (val: string) => !!val || 'Required field';
export const isValidEmail = (val: string) =>
  /^([\w.%+-]+)@([\w-]+\.)+(\w{2,})$/i.test(val) || 'Please enter a valid email address.';
export const minLength = (length: number = 0) => function (val: string) {
  return val.length >= length || `Min available length: ${length} characters`;
}
export const maxLength = (length: number = 0) => function (val: string) {
  return val.length <= length || `Max available length: ${length} characters`;
}

export const validator = (val: string, rules: ValidationFunction[] = []) => {
  const errors: Set<ValidationError> = new Set();
  const addError = (ruleCheck: ValidationFunction) => {
    const res = ruleCheck(val);
    res !== true && errors.add(res);
  }
  rules.forEach((rule) => {
    addError(rule);
  })
  return errors;
}
