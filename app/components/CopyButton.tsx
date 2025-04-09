import { useState } from "react";
import { ClipboardCopy } from "lucide-react";
import { PrimaryButton } from "./buttons/PrimaryButton";

interface CopyButtonProps {
  code: string;
}

export default function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative inline-block">
      <PrimaryButton
        type="button"
        onClick={copyToClipboard}
        size="sm"
        variant="outline"
        icon={<ClipboardCopy className="w-4 h-4" />}
        title="Copy to clipboard"
      >
        {copied ? "Copied!" : "Copy"}
      </PrimaryButton>

      {copied && (
        <div className="absolute -top-8 right-0 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded shadow transition-opacity whitespace-nowrap">
          Copied to clipboard
        </div>
      )}
    </div>
  );
}
