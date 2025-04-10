type RadioOption = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  label?: string;
  name: string;
  value: string;
  options: RadioOption[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export function RadioGroup({
  label,
  name,
  value,
  options,
  onChange,
  error,
}: RadioGroupProps) {
  return (
    <div className="w-full mb-4">
      {label && <p className="block text-sm font-medium mb-2">{label}</p>}
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center space-x-2">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">{opt.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
