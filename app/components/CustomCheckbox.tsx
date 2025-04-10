import React, { useState, useEffect } from "react";

type CustomCheckboxProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export function CustomCheckbox({
  label,
  name,
  checked,
  onChange,
  error,
}: CustomCheckboxProps) {
  const [rippleActive, setRippleActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setRippleActive(true);
  };

  useEffect(() => {
    if (rippleActive) {
      const timeout = setTimeout(() => {
        setRippleActive(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [rippleActive]);

  return (
    <div className="mb-1">
      <label className="flex items-center cursor-pointer select-none group">
        <div className="relative">
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={checked}
            onChange={handleChange}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded-md flex items-center justify-center overflow-hidden relative
              bg-white transition-colors duration-200
              ${
                checked
                  ? "border-primary"
                  : "border-gray-400 group-hover:border-primary-light"
              }
              ${rippleActive ? "animate-border-pulse" : ""}
              border-2
            `}
          >
            {checked && (
              <svg
                className="w-4 h-4 text-primary z-10"
                viewBox="0 0 22 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
        <span className="ml-3 text-sm text-gray-700 group-hover:text-primary transition-all duration-150">
          {label}
        </span>
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
