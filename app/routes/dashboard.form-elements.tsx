import React, { useState } from "react";
import { CustomCheckbox } from "~/components/CustomCheckbox";
import FileUpload from "~/components/FileUpload";
import FormFieldWrapper from "~/components/FormFieldWrapper";
import Input from "~/components/Input";
import { TemplateBlock } from "~/components/TemplateBlock";

export default function FormElementsPage() {
  const [formData, setFormData] = useState({
    file: null as File | null,
    textFieldName: "",
    numberField: "",
    dateField: "",
    message: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("Submitted data:", data);
    alert("handleSubmit");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="space-y-4 mx-auto flex flex-col max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">Form Templates</h2>

      <form onSubmit={handleSubmit}>
        <TemplateBlock
          code={`<Input
            type="text"
            name="textFieldName"
            label="Text Field Label"
            placeholder="Enter your fieldname"
            required
            value={formData.textFieldName}
            onChange={handleChange}
            error={errors.textFieldName}
          />`}
        >
          <Input
            type="text"
            name="textFieldName"
            label="Text Field Label"
            placeholder="Enter your fieldname"
            required
            value={formData.textFieldName}
            onChange={handleChange}
            error={errors.textFieldName}
          />
        </TemplateBlock>

        <TemplateBlock
          code={`<Input
            type="number"
            name="numberField"
            label="Number Field"
            placeholder="Enter your numberField"
            min={1}
            max={120}
            required
            value={formData.numberField}
            onChange={handleChange}
            error={errors.numberField}
          />`}
        >
          <Input
            type="number"
            name="numberField"
            label="Number Field"
            placeholder="Enter your numberField"
            min={1}
            max={120}
            required
            value={formData.numberField}
            onChange={handleChange}
            error={errors.numberField}
          />
        </TemplateBlock>

        <TemplateBlock
          code={` <Input
            type="date"
            name="dateField"
            label="Date Label"
            required
            value={formData.dateField}
            onChange={handleChange}
            error={errors.dateField}
          />`}
        >
          <Input
            type="date"
            name="dateField"
            label="Date Label"
            required
            value={formData.dateField}
            onChange={handleChange}
            error={errors.dateField}
          />
        </TemplateBlock>

        <TemplateBlock
          code={`<Input
            as="textarea"
            name="message"
            label="Message"
            placeholder="Tell us about yourself"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />`}
        >
          <Input
            as="textarea"
            name="message"
            label="Message"
            placeholder="Tell us about yourself"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
        </TemplateBlock>
        <TemplateBlock
          code={`<Input
            type="password"
            name="password"
            label="Password Field Label"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />`}
        >
          <Input
            type="password"
            name="password"
            label="Password Field Label"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
        </TemplateBlock>
      </form>
    </div>
  );
}
