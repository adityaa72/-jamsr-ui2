import { Description, Label, NumberField } from "@jamsrui/react";

export function WithFormatOptions() {
  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      {/* EUR Currency with Accounting Format */}
      <NumberField
        defaultValue={99}
        // minValue={0}
        formatOptions={{
          currency: "EUR",
          currencySign: "accounting",
          style: "currency",
        }}
      >
        <Label>Currency (EUR - Accounting)</Label>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input className="w-[120px]" />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>Accounting format with EUR currency</Description>
      </NumberField>

      {/* USD Currency */}
      <NumberField
        defaultValue={99.99}
        minValue={0}
        formatOptions={{
          currency: "USD",
          style: "currency",
        }}
      >
        <Label>Currency (USD)</Label>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input className="w-[120px]" />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>Standard USD currency format</Description>
      </NumberField>

      {/* Percentage */}
      <NumberField
        defaultValue={0.5}
        formatOptions={{ style: "percent" }}
        maxValue={1}
        minValue={0}
        step={0.01}
      >
        <Label>Percentage</Label>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input className="w-[120px]" />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>Percentage format (0-1, where 0.5 = 50%)</Description>
      </NumberField>

      {/* Decimal with 2 places */}
      <NumberField
        defaultValue={1234.56}
        minValue={0}
        formatOptions={{
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
          style: "decimal",
        }}
      >
        <Label>Decimal (2 decimal places)</Label>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input className="w-[120px]" />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>Decimal format with 2 decimal places</Description>
      </NumberField>

      {/* Unit - Kilograms */}
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
        <Label>Unit (Kilograms)</Label>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input className="w-[120px]" />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>Unit format with kilograms</Description>
      </NumberField>

      {/* Custom Locale - German */}
      <NumberField
        defaultValue={1234.56}
        locale="de-DE"
        formatOptions={{
          style: "currency",
          currency: "EUR",
        }}
      >
        <Label>German Locale (EUR)</Label>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input className="w-[120px]" />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>German number formatting</Description>
      </NumberField>
    </div>
  );
}
