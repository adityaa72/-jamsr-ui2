import { Checkbox } from "@jamsrui/react";

export const CheckboxRadius = () => {
  const radii: Checkbox.Props["radius"][] = ["none", "sm", "md", "lg", "xl"];
  return (
    <div className="grid gap-4">
      {radii.map((radius) => (
        <Checkbox
          key={radius}
          radius={radius}
          label={`${radius}: I am a checkbox`}
        />
      ))}
    </div>
  );
};
