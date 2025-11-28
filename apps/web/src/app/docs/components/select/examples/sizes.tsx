import { Label, Select, SelectItem } from "@jamsrui/react";

const SelectUsage = (props: { size: Select.Props["size"] }) => {
  const { size } = props;
  return (
    <Select className="max-w-sm w-full" placeholder="Select Label" size={size}>
      <Label>Fruit</Label>
      <Select.Trigger />
      <Select.Popover>
        <Select.Content>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="watermelon">Watermelon</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
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
