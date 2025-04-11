import React, { useState } from "react";
import { CustomRadioButton } from "~/components/CustomRadioButton";
import FormFieldWrapper from "~/components/FormFieldWrapper";

export default function RadioForm() {
  const [groupOneSelection, setGroupOneSelection] = useState("option1");
  const [groupTwoSelection, setGroupTwoSelection] = useState("option11");

  const handleGroupOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupOneSelection(e.target.value);
  };

  const handleGroupTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupTwoSelection(e.target.value);
  };

  return (
    <form className="p-4">
      <p className="mt-4 text-sm text-gray-600">
        Selected 1: <strong>{groupOneSelection}</strong>
      </p>
      <p className="mt-4 text-sm text-gray-600">
        Selected 2: <strong>{groupTwoSelection}</strong>
      </p>

      <br />
      <h2 className="text-lg font-medium mb-4">Select an option:</h2>
      <FormFieldWrapper label="Horizontal Radiobuttons">
        <CustomRadioButton
          label="Option 1"
          name="customRadioGroup"
          value="option1"
          checked={groupOneSelection === "option1"}
          onChange={handleGroupOneChange}
        />
        <CustomRadioButton
          label="Option 2"
          name="customRadioGroup"
          value="option2"
          checked={groupOneSelection === "option2"}
          onChange={handleGroupOneChange}
        />
        <CustomRadioButton
          label="Option 3"
          name="customRadioGroup"
          value="option3"
          checked={groupOneSelection === "option3"}
          onChange={handleGroupOneChange}
        />
      </FormFieldWrapper>

      {/* Vertical checkboxes */}
      <FormFieldWrapper label="Horizontal Radiobuttons" direction="vertical">
        <CustomRadioButton
          label="Option 11"
          name="customRadioGroup2"
          value="option11"
          checked={groupTwoSelection === "option11"}
          onChange={handleGroupTwoChange}
        />
        <CustomRadioButton
          label="Option 22"
          name="customRadioGroup2"
          value="option22"
          checked={groupTwoSelection === "option22"}
          onChange={handleGroupTwoChange}
        />
        <CustomRadioButton
          label="Option 33"
          name="customRadioGroup2"
          value="option33"
          checked={groupTwoSelection === "option33"}
          onChange={handleGroupTwoChange}
        />
      </FormFieldWrapper>
    </form>
  );
}
