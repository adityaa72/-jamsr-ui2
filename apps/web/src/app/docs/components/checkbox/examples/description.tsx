import { Checkbox, Description, Label } from "@jamsrui/react";

export const CheckboxDescription = () => {
  return (
    <Checkbox>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>Enable email notifications</Label>
        <Description>
          Receive updates and promotional offers via email.
        </Description>
      </Checkbox.Content>
    </Checkbox>
  );
};
