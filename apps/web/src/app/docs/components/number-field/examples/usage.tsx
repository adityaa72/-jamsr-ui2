import { Label, NumberField } from "@jamsrui/react";

export const NumberFieldUsage = () => {
  return (
    <NumberField
      formatOptions={{
        currency: "EUR",
        currencySign: "accounting",
        style: "currency",
      }}
    >
      <Label>Width</Label>
      <NumberField.Group>
        <NumberField.Decrement />
        <NumberField.Input />
        <NumberField.Increment />
      </NumberField.Group>
    </NumberField>
  );
};
