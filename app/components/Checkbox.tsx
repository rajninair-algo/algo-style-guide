type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({ label, ...props }: Props) {
  return (
    <label className="inline-flex items-center space-x-2">
      <input
        type="checkbox"
        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        {...props}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}
