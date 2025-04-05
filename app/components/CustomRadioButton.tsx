import { useState } from "react";
interface CustomRadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export default function CustomRadioButton({
  label,
  name,
  value,
  checked,
  onChange,
}: CustomRadioButtonProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <span
        role="radio"
        aria-checked={checked}
        tabIndex={0}
        onClick={() => onChange(value)}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && onChange(value)
        }
        className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center
            ${checked ? "bg-indigo-600 border-indigo-600" : "border-indigo-500"}
            focus:outline-none focus:ring-2 focus:ring-indigo-300`}
      >
        {checked && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
      </span>
      <span className="text-indigo-800 font-medium">{label} </span>
      <input
        type="radio"
        name={name}
        value={value}
        className="hidden"
        checked={checked}
        onChange={() => onChange(value)}
      />
    </label>
  );
}
