import { Label, NumberField, Description } from "@jamsrui/react";

export const NumberFieldWithFormatting = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Currency */}
      <NumberField
        defaultValue={99.99}
        minValue={0}
        formatOptions={{
          style: "currency",
          currency: "USD",
        }}
      >
        <Label>Price (USD)</Label>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>Standard USD currency format</Description>
      </NumberField>

      {/* Percentage */}
      <NumberField
        defaultValue={0.5}
        minValue={0}
        maxValue={1}
        step={0.01}
        formatOptions={{
          style: "percent",
        }}
      >
        <Label>Discount</Label>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>Percentage (0.5 = 50%)</Description>
      </NumberField>

      {/* Unit */}
      <NumberField
        defaultValue={1000}
        minValue={0}
        step={10}
        formatOptions={{
          style: "unit",
          unit: "kilogram",
          unitDisplay: "short",
        }}
      >
        <Label>Weight</Label>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>Unit format with kilograms</Description>
      </NumberField>

      {/* Decimal precision */}
      <NumberField
        defaultValue={1234.56}
        minValue={0}
        formatOptions={{
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }}
      >
        <Label>Amount</Label>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>Fixed 2 decimal places</Description>
      </NumberField>
    </div>
  );
};
