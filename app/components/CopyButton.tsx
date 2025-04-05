import { useState } from "react";
import { ClipboardCopy } from "lucide-react";

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
      <button
        type="button"
        onClick={copyToClipboard}
        className="p-1 rounded hover:bg-indigo-100 text-indigo-700 transition-colors"
        title="Copy to clipboard"
      >
        <ClipboardCopy className="w-5 h-5" />
      </button>

      {copied && (
        <div className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow transition-opacity">
          Copied to clipboard
        </div>
      )}
    </div>
  );
}
