import { Switch } from "@jamsrui/react";

export const SwitchSizes = () => {
  const sizes: Switch.Props["size"][] = ["xs", "sm", "md", "lg"];
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <Switch key={size} label={size} size={size} />
      ))}
    </div>
  );
};
