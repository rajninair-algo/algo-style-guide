type Props = {
  label?: string;
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
};

export default function FormFieldWrapper({
  label,
  children,
  direction = "horizontal", // default to horizontal
}: Props) {
  return (
    <div className="mb-4">
      <label className="block text-lg capitalize font-medium text-gray-500 mb-2">
        {label}
      </label>
      <div
        className={`flex gap-2 flex-wrap ${
          direction === "vertical" ? "flex-col" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
