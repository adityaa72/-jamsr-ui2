import { Label, Select } from "@jamsrui/react";

export const SelectMultiple = () => {
  return (
    <Select className="max-w-md" placeholder="Select Label" isMultiple>
      <Label>Fruit</Label>
      <Select.Trigger />
      <Select.Popover>
        <Select.Content>
          {Array(20)
            .fill(null)
            .map((_, idx) => {
              const value = `option${idx}`;
              return (
                <Select.Item key={value} value={value}>
                  {`Option ${idx}`}
                </Select.Item>
              );
            })}
        </Select.Content>
      </Select.Popover>
    </Select>
  );
};
