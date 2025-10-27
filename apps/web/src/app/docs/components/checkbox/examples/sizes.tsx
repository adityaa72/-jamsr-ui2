import { Checkbox } from "@jamsrui/react";

export const CheckboxSizes = () => {
  const sizes: Checkbox.Props["size"][] = ["sm", "md", "lg"];
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <Checkbox key={size} label={size} size={size} />
      ))}
    </div>
  );
};
