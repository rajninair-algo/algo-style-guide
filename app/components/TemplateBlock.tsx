import CopyButton from "./CopyButton";

interface TemplateBlockProps {
  children: React.ReactNode;
  code: string;
}

export function TemplateBlock({ children, code }: TemplateBlockProps) {
  return (
    <>
      <div className="px-4 pb-4 pt-10 rounded-md border bg-white relative mb-6">
        <div className="absolute top-2 right-2 flex items-center">
          <CopyButton code={code.trim()} />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
