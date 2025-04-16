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
    <div className="mb-2 mt-4">
      <label className="block text-sm text-black font-medium capitalize mb-1">
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
