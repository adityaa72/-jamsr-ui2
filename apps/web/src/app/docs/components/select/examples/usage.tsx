import { Label, Select, SelectItem } from "@jamsrui/react";

export const SelectUsage = () => {
  return (
    <Select className="max-w-xs w-full" placeholder="Select one fruit">
      <Label>Fruit</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <Select.Content>
          <SelectItem value="apple">
            Apple
            <Select.ItemIndicator />
          </SelectItem>
          <SelectItem value="blueberry">
            Blueberry
            <Select.ItemIndicator />
          </SelectItem>
          <SelectItem value="watermelon">
            Watermelon
            <Select.ItemIndicator />
          </SelectItem>
          <SelectItem value="banana">
            Banana
            <Select.ItemIndicator />
          </SelectItem>
          <SelectItem value="orange">
            Orange
            <Select.ItemIndicator />
          </SelectItem>
        </Select.Content>
      </Select.Popover>
    </Select>
  );
};
