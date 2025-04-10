import CopyButton from "./CopyButton";

interface TemplateBlockProps {
  children: React.ReactNode;
  code: string;
}

export function TemplateBlock({ children, code }: TemplateBlockProps) {
  return (
    <div className="w-full flex items-end px-2 pb-2 pt-8 rounded-md border bg-white relative m-2">
      <div className="absolute top-2 right-2 flex items-center">
        <CopyButton code={code.trim()} />
      </div>
      {children}
    </div>
  );
}
