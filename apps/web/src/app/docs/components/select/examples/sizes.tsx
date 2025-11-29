import { Label, Select } from "@jamsrui/react";

const SelectUsage = (props: { size: Select.Props["size"] }) => {
  const { size } = props;
  return (
    <Select className="max-w-sm w-full" placeholder="Select Label" size={size}>
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
    </Select>
  );
};

export const SelectSizes = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <SelectUsage size="sm" />
      <SelectUsage size="md" />
      <SelectUsage size="lg" />
    </div>
  );
};
