import { Label, Select, SelectItem } from "@jamsrui/react";

export const SelectUsage = () => {
  return (
    <Select
      defaultValue={["apple"]}
      className="max-w-xs w-full"
      placeholder="Select one fruit"
    >
      <Label>Fruit</Label>
      <Select.Trigger />
      <Select.Popover>
        <Select.Content>
          <SelectItem value="apple" textValue="Apple">
            Apple
            <Select.ItemIndicator />
          </SelectItem>
          <SelectItem value="blueberry" textValue="Blueberry">
            Blueberry
            <Select.ItemIndicator />
          </SelectItem>
          <SelectItem value="watermelon" textValue="Watermelon">
            Watermelon
            <Select.ItemIndicator />
          </SelectItem>
          <SelectItem value="banana" textValue="Banana">
            Banana
            <Select.ItemIndicator />
          </SelectItem>
          <SelectItem value="orange" textValue="Orange">
            Orange
            <Select.ItemIndicator />
          </SelectItem>
        </Select.Content>
      </Select.Popover>
    </Select>
  );
};
