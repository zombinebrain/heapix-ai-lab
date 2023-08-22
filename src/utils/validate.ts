export type ValidationError = {
  text: string,
  additionalData?: object
}

export type ValidationFunction = (
  v: string,
  length?: number
) => ValidationError | true;

export const isRequired = (val: string) => !!val || { text: 'Required field' }
export const isValidEmail = (val: string) =>
  /^([\w.%+-]+)@([\w-]+\.)+(\w{2,})$/i.test(val) || { text: 'Invalid email' };
export const minLength = (val: string, length: number) =>
  val.length >= length || { text: 'Min length', additionalData: { length } };
export const maxLength = (val: string, length: number) =>
  val.length <= length || { text: 'Max length', additionalData: { length } };

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
