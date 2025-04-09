type Props = {
  label: string;
  children: React.ReactNode;
};

export default function FormFieldWrapper({ label, children }: Props) {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-500 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}
