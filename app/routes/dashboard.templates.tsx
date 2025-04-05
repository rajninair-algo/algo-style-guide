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
import { ExampleBlock } from "~/components/ExampleBlock";
import Accordion from "~/components/Accordion";

// app/routes/dashboard.tasks.tsx
export default function Templates() {
  const [selectedValue, setSelectedValue] = useState("");

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
    <div className="max-w-2xl mx-auto p-6">
      {/* Usage */}
      <h4 className="text-5xl mb-4 underline pb-4">Form Fields</h4>

      <div className="copiable">
        <Title>Register</Title>
        <Subtitle>Join Us</Subtitle>
        <SectionTitle>Personal Info</SectionTitle>

        <form>
          <ExampleBlock
            code={`<FormFieldWrapper label="Full Name">
  <Input name="fullname" placeholder="John Doe" />
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="Full Name">
              <Input name="fullname" placeholder="John Doe" />
            </FormFieldWrapper>
          </ExampleBlock>

          <ExampleBlock
            code={`<FormFieldWrapper label="Email">
  <Input
    name="email"
    type="email"
    placeholder="rajni.nair@algorisys.com"
/>
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="Email">
              <Input
                name="email"
                type="email"
                placeholder="rajni.nair@algorisys.com"
              />
            </FormFieldWrapper>
          </ExampleBlock>

          <ExampleBlock
            code={`<FormFieldWrapper label="Upload Profile Picture">
  <FileUpload name="profilePic" accept="image/*" showPreview />
</FormFieldWrapper>`}
          >
            <FormFieldWrapper label="Upload Profile Picture">
              <FileUpload name="profilePic" accept="image/*" showPreview />
            </FormFieldWrapper>
          </ExampleBlock>

          <ExampleBlock
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
          </ExampleBlock>

          <ExampleBlock
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
          </ExampleBlock>

          <ExampleBlock
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
          </ExampleBlock>

          <ExampleBlock
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
          </ExampleBlock>

          <ExampleBlock
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
          </ExampleBlock>

          <ExampleBlock
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
          </ExampleBlock>

          <br />
          <br />

          <ExampleBlock code={accordionCode}>
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
          </ExampleBlock>

          <br />
          <br />
        </form>
      </div>
    </div>
  );
}
