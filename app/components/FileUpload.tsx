import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { X, UploadCloud } from "lucide-react";

type FileUploadProps = {
  label?: string;
  name: string;
  multiple?: boolean;
  accept?: string;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  name,
  multiple = false,
  accept,
  files,
  setFiles,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Filter out duplicates by name and size
      const uniqueFiles = acceptedFiles.filter(
        (file) =>
          !files.some(
            (existing) =>
              existing.name === file.name && existing.size === file.size
          )
      );

      if (uniqueFiles.length > 0) {
        setFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
      }
    },
    [files, setFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    multiple,
  });

  const handleRemove = (fileToRemove: File) => {
    setFiles((prevFiles) =>
      prevFiles.filter(
        (file) =>
          file.name !== fileToRemove.name || file.size !== fileToRemove.size
      )
    );
  };

  return (
    <div className="flex flex-col items-start gap-3 w-full">
      {label && <label className="font-medium">{label}</label>}

      <div
        {...getRootProps()}
        className="cursor-pointer flex items-center justify-center p-4 border-2 border-dashed border-gray-400 rounded-lg hover:bg-gray-100 transition w-full"
      >
        <input {...getInputProps()} id={name} name={name} />
        <UploadCloud className="text-primary mr-2" />
        <span className="text-lg font-semibold text-gray-700">
          Drag & drop files here, or click to select files
        </span>
      </div>

      {files.length > 0 && (
        <ul className="w-full mt-2 space-y-2">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded"
            >
              <div className="flex items-center">
                {file.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-10 h-10 object-cover mr-2"
                  />
                )}
                <span className="truncate max-w-xs">{file.name}</span>
                &nbsp;
                <span className="text-xs text-gray-600">
                  ({(file.size / 1024).toFixed(2)} KB)
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleRemove(file)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;
