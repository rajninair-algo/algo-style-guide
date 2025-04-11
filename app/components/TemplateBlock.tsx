import CopyButton from "./CopyButton";

interface TemplateBlockProps {
  children: React.ReactNode;
  code: string;
}

export function TemplateBlock({ children, code }: TemplateBlockProps) {
  return (
    <div className="w-full flex items-end py-[4rem] px-4   rounded-md   bg-white relative m-2">
      <div className="absolute top-2 right-2 flex items-center">
        <CopyButton code={code.trim()} />
      </div>
      {children}
    </div>
  );
}
