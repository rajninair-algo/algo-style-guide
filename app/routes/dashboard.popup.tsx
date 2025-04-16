import { useState } from "react";
import { Button } from "~/components/buttons/Buttons";
import { CustomCheckbox } from "~/components/CustomCheckbox";
import FormFieldWrapper from "~/components/FormFieldWrapper";
import Input from "~/components/Input";
import Modal from "~/components/Modal";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = () => {
    console.log("handle submit");
    // Hide the modal
    setIsOpen(false);
  };
  const handleCheckboxChange = () => {
    console.log("handleCheckboxChange");
  };

  return (
    <div className="px-4 py-4">
      <p className="text-lg ">Popup / Modal</p>
      <br />
      <Button
        variant="primary"
        outline
        size="md"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </Button>

      <br />

      {/* Modal */}
      <Modal
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Subscribe to our channel."
        btnText=""
      >
        <p className="mb-4">Please fill in the below details.</p>

        <FormFieldWrapper label="Horizontal Checkboxes" direction="">
          <CustomCheckbox
            name="checkbox2"
            label="Custom Checkbox 2"
            checked={"checkbox2"}
            onChange={handleCheckboxChange}
          />
        </FormFieldWrapper>
        <Input
          type="text"
          name="textFieldName"
          label="Text Field Label"
          placeholder="Enter your fieldname"
          required
          // value={formData.textFieldName}
          // onChange={handleChange}
          // error={errors.textFieldName}
        />
      </Modal>
    </div>
  );
}
