import SectionTitle from "~/components/SectionTitle";
import Subtitle from "~/components/Subtitle";
import Title from "~/components/Title";
import FormFieldWrapper from "~/components/FormFieldWrapper";
import Input from "~/components/Input";
import Select from "~/components/Select";
import Checkbox from "~/components/Checkbox";
import Radio from "~/components/Radio";
import Textarea from "~/components/Textarea";
import CustomCheckbox from "~/components/CustomCheckbox";
import CustomRadioButton from "~/components/CustomRadioButton";
import { useState } from "react";
import FileUpload from "~/components/FileUpload";
import { TemplateBlock } from "~/components/TemplateBlock";
import Accordion from "~/components/Accordion";
import { PrimaryButton } from "~/components/buttons/PrimaryButton";
import PaginationStyle_1 from "~/components/Table/PaginationStyle_1";

// app/routes/dashboard.tasks.tsx
export default function Templates() {
  const [selectedValue, setSelectedValue] = useState("");
  const handleClick = () => {
    alert("I'm clicked");
  };
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    console.log("Selected:", value);
  };

  const handleChange = (checked: boolean) => {
    console.log("Checkbox is checked:", checked);
  };

  const accordionCode = `<Accordion
  items={[
    {
      title: "What is Remix?",
      content: "Remix is a full stack web framework based on React Router."
    },
    {
      title: "What is Tailwind CSS?",
      content: "Tailwind is a utility-first CSS framework."
    },
    {
      title: "How do I copy this?",
      content: "Click the copy icon on the top right!"
    }
  ]}
/>`;
  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-50">
      {/* Usage */}
      <h4 className="text-5xl mb-4 underline pb-4">Form Fields</h4>

      <div className="copiable">
        <Title>Register</Title>
        <Subtitle>Join Us</Subtitle>
        <SectionTitle>Personal Info</SectionTitle>

        <form>
          <TemplateBlock
            code={`<FormFieldWrapper label="Full Name">
  <Input name="fullname" placeholder="John Doe" />
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="Full Name">
              <Input name="fullname" placeholder="John Doe" />
            </FormFieldWrapper>
          </TemplateBlock>

          <TemplateBlock
            code={`<FormFieldWrapper label="Email">
  <Input
    name="email"
    type="email"
    placeholder="johndoe@gmail.com"
/>
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="Email">
              <Input
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
              />
            </FormFieldWrapper>
          </TemplateBlock>

          <TemplateBlock
            code={`<FormFieldWrapper label="Upload Profile Picture">
  <FileUpload name="profilePic" accept="image/*" showPreview />
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="Upload Profile Picture">
              <FileUpload name="profilePic" accept="image/*" showPreview />
            </FormFieldWrapper>
          </TemplateBlock>

          <TemplateBlock
            code={`<FormFieldWrapper label="Choose an option:">
  <div className="flex gap-5">
    <CustomRadioButton
      name="option"
      value="option1"
      label="Option 1"
      checked={selectedValue === "option1"}

      onChange={handleRadioChange}
    />
    <CustomRadioButton
      name="option"
      value="option2"
      label="Option 2"
     checked={selectedValue === "option2"}

      onChange={handleRadioChange}
    />
    <CustomRadioButton
      name="option"
      value="option3"
      label="Option 3"
     checked={selectedValue === "option3"}

      onChange={handleRadioChange}
    />
  </div>
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="Choose an option:">
              <div className="flex gap-5">
                <CustomRadioButton
                  name="option"
                  value="option1"
                  label="Option 1"
                  checked={selectedValue === "option1"}
                  onChange={handleRadioChange}
                />
                <CustomRadioButton
                  name="option"
                  value="option2"
                  label="Option 2"
                  checked={selectedValue === "option2"}
                  onChange={handleRadioChange}
                />
                <CustomRadioButton
                  name="option"
                  value="option3"
                  label="Option 3"
                  checked={selectedValue === "option3"}
                  onChange={handleRadioChange}
                />
              </div>
              <p className="mt-4 text-indigo-700 font-medium">
                Selected: {selectedValue}
              </p>
            </FormFieldWrapper>
          </TemplateBlock>

          <TemplateBlock
            code={`<FormFieldWrapper label="Country">
  <Select name="country">
    <option value="">Select</option>
    <option value="in">India</option>
    <option value="us">USA</option>
  </Select>
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="Country">
              <Select name="country">
                <option value="">Select</option>
                <option value="in">India</option>
                <option value="us">USA</option>
              </Select>
            </FormFieldWrapper>
          </TemplateBlock>

          <TemplateBlock
            code={`<FormFieldWrapper label="About You">
  <Textarea
    name="about"
    rows={4}
    placeholder="Tell us about yourself..."
  />
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="About You">
              <Textarea
                name="about"
                rows={4}
                placeholder="Tell us about yourself..."
              />
            </FormFieldWrapper>
          </TemplateBlock>

          <TemplateBlock
            code={`<FormFieldWrapper label="">
  <Checkbox name="terms" label="I agree to the terms and conditions" />
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="">
              <Checkbox
                name="terms"
                label="I agree to the terms and conditions"
              />
            </FormFieldWrapper>
          </TemplateBlock>

          <TemplateBlock
            code={`<FormFieldWrapper label="">
  <CustomCheckbox label="I agree to the terms" />
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="">
              <CustomCheckbox
                label="I agree to the terms"
                onChange={handleChange}
              />
            </FormFieldWrapper>
          </TemplateBlock>

          <TemplateBlock
            code={`<button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
  Submit
</button>`}
          >
            <button
              type="submit"
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </TemplateBlock>

          <br />
          <br />

          <TemplateBlock code={accordionCode}>
            <FormFieldWrapper label="Accordion Title">
              <Accordion
                items={[
                  {
                    title: "What is Remix?",
                    content:
                      "Remix is a full stack web framework based on React Router.",
                  },
                  {
                    title: "What is Tailwind CSS?",
                    content: "Tailwind is a utility-first CSS framework.",
                  },
                  {
                    title: "How do I copy this?",
                    content: "Click the copy icon on the top right!",
                  },
                ]}
              />
            </FormFieldWrapper>
          </TemplateBlock>

          <br />
          <br />
          <PrimaryButton onClick={handleClick} variant="primary" size="md">
            primary md
          </PrimaryButton>

          {/* tes */}
          <PrimaryButton onClick={handleClick} variant="outline" size="xl">
            outline xl
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
