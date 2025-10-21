import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseProps {
  label: string;
  multiline?: boolean;
  rows?: number;
}

type FormInputProps = BaseProps &
  (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>);

const FormInput: React.FC<FormInputProps> = ({ label, multiline, rows = 4, ...props }) => {
  const sharedClass =
    "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500";

  return (
    <div className="mb-4">
      <label className="block text-gray-800 font-semibold mb-1">{label}</label>

      {multiline ? (
        <textarea
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          rows={rows}
          className={`${sharedClass} h-32 resize-y`}
        />
      ) : (
        <input
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
          className={sharedClass}
        />
      )}
    </div>
  );
};

export default FormInput;
