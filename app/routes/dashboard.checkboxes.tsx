import React, { useState } from "react";
import { CustomCheckbox } from "~/components/CustomCheckbox";
import FileUpload from "~/components/FileUpload";
import FormFieldWrapper from "~/components/FormFieldWrapper";
import Input from "~/components/Input";
import { TemplateBlock } from "~/components/TemplateBlock";

export default function CheckboxesPage() {
  const [files, setFiles] = useState<File[]>([]);

  const [formData, setFormData] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("Submitted data:", data);
    alert("handleSubmit");
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="space-y-4 mx-auto flex flex-col max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">Form Templates</h2>

      <form onSubmit={handleSubmit}>
        {/* Horizontal Checkboxes */}
        <TemplateBlock
          code={`<FormFieldWrapper label="Horizontal Checkboxes" direction="">
            <CustomCheckbox
              name="checkbox1"
              label="Custom Checkbox"
              checked={formData.checkbox1}
              onChange={handleCheckboxChange}
            />

            <CustomCheckbox
              name="checkbox2"
              label="Custom Checkbox 2"
              checked={formData.checkbox2}
              onChange={handleCheckboxChange}
            />
          </FormFieldWrapper>`}
        >
          <FormFieldWrapper label="Horizontal Checkboxes" direction="">
            <CustomCheckbox
              name="checkbox1"
              label="Custom Checkbox"
              checked={formData.checkbox1}
              onChange={handleCheckboxChange}
            />

            <CustomCheckbox
              name="checkbox2"
              label="Custom Checkbox 2"
              checked={formData.checkbox2}
              onChange={handleCheckboxChange}
            />
          </FormFieldWrapper>
        </TemplateBlock>

        {/* Vertical Checkboxes */}
        <TemplateBlock
          code={`<FormFieldWrapper label="Vertial Checkboxes" direction="vertical">
            <CustomCheckbox
              name="checkbox3"
              label="Custom Checkbox 3"
              checked={formData.checkbox3}
              onChange={handleCheckboxChange}
            />
            <CustomCheckbox
              name="checkbox4"
              label="Custom Checkbox 4"
              checked={formData.checkbox4}
              onChange={handleCheckboxChange}
            />
            <CustomCheckbox
              name="checkbox5"
              label="Custom Checkbox 5"
              checked={formData.checkbox5}
              onChange={handleCheckboxChange}
            />
            <CustomCheckbox
              name="checkbox6"
              label="Custom Checkbox 6"
              checked={formData.checkbox6}
              onChange={handleCheckboxChange}
            />
          </FormFieldWrapper>`}
        >
          <FormFieldWrapper label="Vertial Checkboxes" direction="vertical">
            <CustomCheckbox
              name="checkbox3"
              label="Custom Checkbox 3"
              checked={formData.checkbox3}
              onChange={handleCheckboxChange}
            />
            <CustomCheckbox
              name="checkbox4"
              label="Custom Checkbox 4"
              checked={formData.checkbox4}
              onChange={handleCheckboxChange}
            />
            <CustomCheckbox
              name="checkbox5"
              label="Custom Checkbox 5"
              checked={formData.checkbox5}
              onChange={handleCheckboxChange}
            />
            <CustomCheckbox
              name="checkbox6"
              label="Custom Checkbox 6"
              checked={formData.checkbox6}
              onChange={handleCheckboxChange}
            />
          </FormFieldWrapper>
        </TemplateBlock>
      </form>

      <br />
    </div>
  );
}
