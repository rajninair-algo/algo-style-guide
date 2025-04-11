import React, { useState, useEffect } from "react";

type CustomRadioButtonProps = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export function CustomRadioButton({
  label,
  name,
  value,
  checked,
  onChange,
  error,
}: CustomRadioButtonProps) {
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
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center overflow-hidden relative bg-white transition-colors duration-200
              ${
                checked
                  ? "border-primary"
                  : "border-gray-400 group-hover:border-primary-light"
              }
              ${rippleActive ? "animate-border-pulse" : ""}
            `}
          >
            {checked && (
              <div className="w-2.5 h-2.5 bg-primary rounded-full z-10" />
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
