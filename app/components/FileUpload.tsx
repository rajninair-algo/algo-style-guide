import { useState } from "react";

interface FileUploadProps {
  name: string;
  accept?: string;
  showPreview?: boolean;
  onChange?: (file: File | null) => void;
}

export default function FileUpload({
  name,
  accept,
  showPreview = false,
  onChange,
}: FileUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (showPreview && file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    } else {
      setPreviewUrl(null);
    }

    onChange?.(file);
  };

  return (
    <div>
      <input
        type="file"
        name={name}
        accept={accept}
        onChange={handleChange}
        className="block w-full text-sm text-gray-700
                   file:mr-4 file:py-2 file:px-4
                   file:rounded file:border-0
                   file:text-sm file:font-semibold
                   file:bg-indigo-50 file:text-indigo-700
                   hover:file:bg-indigo-100
                   transition-colors"
      />
      {showPreview && previewUrl && (
        <div className="mt-4 w-32">
          <img
            src={previewUrl}
            alt="Preview"
            className="max-w-xs12 rounded-xl border"
          />
        </div>
      )}
    </div>
  );
}
