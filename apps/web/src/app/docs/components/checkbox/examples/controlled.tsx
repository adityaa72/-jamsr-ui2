"use client";

import { Checkbox, Label } from "@jamsrui/react";
import { useState } from "react";

export const CheckboxControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox isChecked={isChecked} onCheckedChange={setIsChecked}>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>
          {isChecked
            ? "I agree to receive marketing emails"
            : "Agree to receive marketing emails"}
        </Label>
      </Checkbox.Content>
    </Checkbox>
  );
};
