import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = (InputProps | TextareaProps) & {
  label?: string;
  error?: string;
  as?: "input" | "textarea"; // use 'as' prop to switch between input and textarea
};

export default function Input({
  label,
  error,
  className = "",
  as = "input",
  ...props
}: Props) {
  const baseClass =
    "w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary";

  const errorClass = error ? "border-red-500 ring-red-300" : "border-gray-300";

  const inputClass = `${baseClass} ${errorClass} ${className}`;

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm text-black font-medium capitalize mb-1">
          {label}
        </label>
      )}

      {as === "textarea" ? (
        <textarea {...(props as TextareaProps)} className={inputClass} />
      ) : (
        <input {...(props as InputProps)} className={inputClass} />
      )}

      {/* {!error && (
        <p className="text-red-500 text-xs mt-1">
          {"Error message here .. for testing"}
        </p>
      )} */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
