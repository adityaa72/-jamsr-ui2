import { Checkbox, Label } from "@jamsrui/react";

export const CheckboxDisabled = () => {
  return (
    <Checkbox disabled>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>Enable email notifications</Label>
      </Checkbox.Content>
    </Checkbox>
  );
};
