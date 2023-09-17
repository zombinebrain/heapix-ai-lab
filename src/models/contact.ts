import {ValidationFunction} from "../utils/validate";

export type AlertStatusType = 'SUCCESS' | 'FAILED' | null;

export type ContactModalProps = {
  onClose: () => void;
}

export interface FormDataType {
  name: string,
  email: string,
  message: string
}

export interface inputFieldsType {
  label: string,
  id: string,
  type?: string,
  isTextArea?: boolean
}

export type InputFieldsRulesType = {
  [K: string]: Array<ValidationFunction>
};
