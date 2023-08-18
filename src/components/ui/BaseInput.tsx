import { Dispatch, SetStateAction } from 'react';

type BaseInputProps = {
  value: string,
  onChange: Dispatch<SetStateAction<string>>,
  label: string,
  id: string,
  type?: string
  isTextArea?: boolean
};

const BaseInput = ({
  value,
  onChange,
  label,
  id,
  type = "text",
  isTextArea = false
}: BaseInputProps) => {
  return (
    <div className="relative group text-grey-400 hover:text-white flex flex-col base-padding">
      <label htmlFor={id} className="text-callout group-focus-within:text-lemon">
        { label }
      </label>
      {
        isTextArea
          ?
          <textarea
            rows={4}
            id={id}
            className={`${!!value ? 'text-white' : 'text-grey-400'} resize-none bg-black outline-none focus:text-white`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          :
          <input
            id={id}
            type={type}
            className={`${!!value ? 'text-white' : 'text-grey-400'} bg-black outline-none focus:text-white`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
      }
      <div className="absolute bottom-0 left-0 w-full border-b border-grey-800 hover:border-grey-600 group-focus-within:border-lemon"></div>
    </div>
  );
};

export default BaseInput;
