import React, { useState } from "react";
import { CustomCheckbox } from "~/components/CustomCheckbox";
import FileUpload from "~/components/FileUpload";
import FormFieldWrapper from "~/components/FormFieldWrapper";
import Input from "~/components/Input";
import { TemplateBlock } from "~/components/TemplateBlock";

export default function FileUploadPage() {
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("Submitted data:", data);
    alert("handleSubmit");
  };

  return (
    <div className="space-y-4 mx-auto flex flex-col max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">File Upload</h2>

      <form onSubmit={handleSubmit}>
        <TemplateBlock
          code={` <FormFieldWrapper>
            <FileUpload
              label="Upload"
              name="images"
              multiple
              accept="image/*,.pdf,.docx,.txt"
              files={files}
              setFiles={setFiles}
            />
          </FormFieldWrapper>`}
        >
          <FormFieldWrapper>
            <FileUpload
              label="Upload"
              name="images"
              multiple
              accept="image/*,.pdf,.docx,.txt"
              files={files}
              setFiles={setFiles}
            />
          </FormFieldWrapper>
        </TemplateBlock>
      </form>
    </div>
  );
}
