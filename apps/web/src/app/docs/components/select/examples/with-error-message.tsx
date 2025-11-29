import { FieldError, Label, Select } from "@jamsrui/react";

export const SelectWithErrorMessage = () => {
  return (
    <Select className="max-w-xs" isInvalid>
      <Label>Fruit</Label>
      <Select.Trigger />
      <Select.Popover>
        <Select.Content>
          <Select.Item value="apple" textValue="Apple">
            Apple
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="blueberry" textValue="Blueberry">
            Blueberry
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="watermelon" textValue="Watermelon">
            Watermelon
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="banana" textValue="Banana">
            Banana
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="orange" textValue="Orange">
            Orange
            <Select.ItemIndicator />
          </Select.Item>
        </Select.Content>
      </Select.Popover>
      <FieldError>Please select a fruit</FieldError>
    </Select>
  );
};
