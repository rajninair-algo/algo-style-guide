import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({ label, error, className, ...props }: Props) {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <input
        {...props}
        className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
          error ? "border-red-500 ring-red-300" : "border-gray-300"
        } ${className}`}
      />
      {/* For testing error style */}
      {/* {!error && (
        <p className="text-red-500 text-xs mt-1">
          {"Error will be displayed here"}
        </p>
      )} */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
