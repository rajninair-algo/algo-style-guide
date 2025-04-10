type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  label?: string;
  name: string;
  options: SelectOption[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
};

export function Select({
  label,
  name,
  options,
  value,
  onChange,
  error,
}: SelectProps) {
  return (
    <div className="w-full mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          error ? "border-red-500 ring-red-300" : "border-gray-300"
        }`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
