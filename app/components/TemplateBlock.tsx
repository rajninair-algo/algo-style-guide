import CopyButton from "./CopyButton";

interface TemplateBlockProps {
  children: React.ReactNode;
  code: string;
}

export function TemplateBlock({ children, code }: TemplateBlockProps) {
  return (
    <div className="flex-1 flex items-end px-2 pb-2 pt-12 rounded-md border bg-white relative m-6">
      <div className="absolute top-2 right-2 flex items-center">
        <CopyButton code={code.trim()} />
      </div>
      <div>{children}</div>
    </div>
  );
}
