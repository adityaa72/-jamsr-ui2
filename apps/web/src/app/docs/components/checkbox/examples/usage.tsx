import { Checkbox, Label } from "@jamsrui/react";

export const CheckboxUsage = () => {
  return (
    <Checkbox>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>Enable email notifications</Label>
      </Checkbox.Content>
    </Checkbox>
  );
};
