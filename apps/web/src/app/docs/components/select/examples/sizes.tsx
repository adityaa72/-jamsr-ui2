import { Select, SelectItem } from "@jamsr-ui/react";

const SelectUsage = (props: { size: Select.Props["size"] }) => {
  const { size } = props;
  return (
    <Select className="max-w-sm w-full" label="Select Label" size={size}>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="watermelon">Watermelon</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
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
