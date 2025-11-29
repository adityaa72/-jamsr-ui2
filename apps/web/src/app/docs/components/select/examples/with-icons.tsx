import { EmailIcon } from "@jamsrui/icons";
import { Label, Select } from "@jamsrui/react";

export const SelectWithIcons = () => {
  return (
    <Select className="max-w-xs" placeholder="Select as item...">
      <Label>Fruit</Label>
      <Select.Trigger>
        <EmailIcon className="text-foreground-secondary" />
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
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
    </Select>
  );
};
