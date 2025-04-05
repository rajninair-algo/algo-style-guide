type Props = {
  label: string;
  name: string;
  value: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Radio({ label, name, value, ...props }: Props) {
  return (
    <label className="inline-flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
        {...props}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}
