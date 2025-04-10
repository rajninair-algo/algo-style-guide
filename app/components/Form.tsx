import React from "react";

type FormProps = {
  noOfColumns?: number;
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  rounded?: string; // e.g. "rounded-lg"
  bgColor?: string; // e.g. "bg-white"
  padding?: string; // e.g. "p-6"
  buttonEnd?: boolean;
};

const columnClassMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export default function Form({
  noOfColumns = 1,
  children,
  onSubmit,
  rounded = "rounded-lg",
  bgColor = "bg-white",
  padding = "p-6",
  buttonEnd,
}: FormProps) {
  const columnClass = columnClassMap[noOfColumns] || "grid-cols-1";

  const content: React.ReactNode[] = [];
  const submitRow: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.props?.type === "submit") {
      submitRow.push(child);
    } else {
      content.push(child);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className={`w-full border ${padding} ${rounded} ${bgColor}`}
    >
      <div className={`w-full grid ${columnClass} gap-4  `}>{content}</div>

      {submitRow.length > 0 && (
        <div
          className={`flex ${
            buttonEnd && "justify-end"
          } col-span-${noOfColumns} `}
        >
          {submitRow}
        </div>
      )}
    </form>
  );
}
