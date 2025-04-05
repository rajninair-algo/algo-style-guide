import CopyButton from "./CopyButton";

interface ExampleBlockProps {
  children: React.ReactNode;
  code: string;
}

export function ExampleBlock({ children, code }: ExampleBlockProps) {
  return (
    
    <div className="border p-4 rounded-md bg-gray-50 relative mb-6">
      <div className="absolute top-2 right-2">
        <CopyButton code={code.trim()} />
      </div>
      <div>{children}</div>
    </div>
  );
}
