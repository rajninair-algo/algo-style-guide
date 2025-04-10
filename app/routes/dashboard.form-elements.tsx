import React, { useState } from "react";
import { Button } from "~/components/buttons/Buttons";
import Form from "~/components/Form";
import Input from "~/components/Input";
import { TemplateBlock } from "~/components/TemplateBlock";

const fields = [
  { label: "First Name", name: "firstName", type: "text", placeholder: "Jane" },
  { label: "Last Name", name: "lastName", type: "text", placeholder: "Doe" },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "jane@example.com",
  },
  {
    label: "City",
    name: "city",
    type: "city",
    placeholder: "City",
  },
  {
    label: "Address 1",
    name: "address 1",
    type: "address 1",
    placeholder: "address 1",
  },
  {
    label: "Address 2",
    name: "address 2",
    type: "address 2",
    placeholder: "address 2",
  },
];

export default function Page() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("Submitted data:", data);
    alert("handleSubmit");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="space-y-4 mx-auto flex flex-col">
      <h2 className="text-xl font-bold">3 ColumnLayout</h2>
      <TemplateBlock
        code={`<h4 className="text-lg font-bold mb-4">Form Title</h4>`}
      >
        <h4 className="text-lg font-bold mb-4">Form Title</h4>
      </TemplateBlock>
      <TemplateBlock
        code={` <Form noOfColumns={3} onSubmit={handleSubmit} buttonEnd={true}>
        {fields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}

        <Button type="submit" variant="primary" size="md">
          Submit
        </Button>
      </Form>`}
      >
        <Form noOfColumns={3} onSubmit={handleSubmit} buttonEnd={true}>
          {fields.map((field) => (
            <Input
              key={field.name}
              type={field.type}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              error={errors[field.name]}
            />
          ))}

          <Button type="submit" variant="primary" size="md">
            Submit
          </Button>
        </Form>
      </TemplateBlock>

      <br />
      <hr />
      <br />

      <h2 className="text-2xl font-bold">2 Column Layout</h2>
      <TemplateBlock
        code={` <Form noOfColumns={2} onSubmit={handleSubmit}>
        {fields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}

        <Button type="submit" variant="primary" size="md">
          Submit
        </Button>
      </Form>`}
      >
        <Form noOfColumns={2} onSubmit={handleSubmit}>
          {fields.map((field) => (
            <Input
              key={field.name}
              type={field.type}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              error={errors[field.name]}
            />
          ))}

          <Button type="submit" variant="primary" size="md">
            Submit
          </Button>
        </Form>
      </TemplateBlock>

      <br />
      <hr />
      <hr />
      <br />

      <h4 className="font-bold text-4xl">Testing copy and paste</h4>
      <br />
      <hr />
      <br />
      <h4 className="text-lg font-bold mb-4">Form Title</h4>
      <Form noOfColumns={4} onSubmit={handleSubmit} buttonEnd={true}>
        {fields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}

        <Button type="submit" variant="primary" size="md">
          Submit
        </Button>
      </Form>

      <h4 className="text-lg font-bold mb-4">Form Title</h4>

      <Form noOfColumns={3} onSubmit={handleSubmit} buttonEnd={true}>
        {fields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}

        <Button type="submit" variant="primary" size="md">
          Submit
        </Button>
      </Form>
    </div>
  );
}
