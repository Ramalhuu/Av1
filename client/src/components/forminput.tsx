import React, { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-40% border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
      />
    </div>
  );
};

export default FormInput;
