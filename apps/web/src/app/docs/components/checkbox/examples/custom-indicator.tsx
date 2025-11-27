"use client";

import { PlusIcon } from "@jamsrui/icons";
import { Checkbox, Label } from "@jamsrui/react";

export const CheckboxCustomIndicator = () => {
  return (
    <Checkbox>
      <Checkbox.Control>
        <Checkbox.Indicator>
          {({ isChecked }) =>
            isChecked ? <PlusIcon className="size-3" /> : null
          }
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Content>
        <Label>Enable email notifications</Label>
      </Checkbox.Content>
    </Checkbox>
  );
};
