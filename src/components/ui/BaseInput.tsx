import {ChangeEvent, KeyboardEvent} from 'react';

type BaseInputProps = {
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void,
  label: string,
  id: string,
  type?: string
  isTextArea?: boolean,
  required?: boolean,
  isError: boolean
  errorText?: string
};

const BaseInput = ({
  value,
  onChange,
  label,
  id,
  type = "text",
  isTextArea = false,
  required = false,
  isError = false,
  onKeyDown,
  errorText
}: BaseInputProps) => {
  return (
    <div className="relative group text-grey-400 hover:text-white flex flex-col base-padding">
      <label htmlFor={id} className={`text-callout group-focus-within:text-lemon ${isError ? 'text-orange' : ''}`}>
        { label }
      </label>
      {
        isTextArea
          ?
          <textarea
            rows={3}
            id={id}
            className={`${!!value ? 'text-white' : 'text-grey-400'} resize-none bg-black outline-none focus:text-white`}
            value={value}
            onChange={onChange}
            required={required}
            spellCheck="false"
            onKeyDown={(e) => onKeyDown(e)}
          />
          :
          <input
            id={id}
            type={type}
            className={`${!!value ? 'text-white' : 'text-grey-400'} bg-black outline-none focus:text-white`}
            value={value}
            onChange={onChange}
            required={required}
            spellCheck="false"
          />
      }
      {
        errorText && isError && <span className="text-orange text-callout">{errorText}</span>
      }
      <div className={`absolute bottom-0 left-0 w-full border-b border-grey-800 hover:border-grey-600 group-focus-within:border-lemon ${isError ? 'border-orange' : ''}`}/>
    </div>
  );
};

export default BaseInput;
