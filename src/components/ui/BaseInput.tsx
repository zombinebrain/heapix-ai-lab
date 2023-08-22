import {ChangeEvent} from 'react';

type BaseInputProps = {
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  onKeyDown: (e) => void,
  label: string,
  id: string,
  type?: string
  isTextArea?: boolean,
  required?: boolean,
  isError: boolean
};

const BaseInput = ({
  value,
  onChange,
  label,
  id,
  type = "text",
  isTextArea = false,
  required = false,
  isError = false
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
      <div className={`absolute bottom-0 left-0 w-full border-b border-grey-800 hover:border-grey-600 group-focus-within:border-lemon ${isError ? 'border-orange' : ''}`}/>
    </div>
  );
};

export default BaseInput;
