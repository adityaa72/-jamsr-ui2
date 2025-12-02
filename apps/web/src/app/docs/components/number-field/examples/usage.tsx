import { Label, NumberField } from "@jamsrui/react";

export const NumberFieldUsage = () => {
  return (
    <NumberField>
      <Label>Width</Label>
      <NumberField.Group>
        <NumberField.DecrementButton />
        <NumberField.Input />
        <NumberField.IncrementButton />
      </NumberField.Group>
    </NumberField>
  );
};
