import { CheckboxProps } from "@jamsrui/checkbox";
import { Checkbox, Label } from "@jamsrui/react";

export const CheckboxRadius = () => {
  const radiusExamples = [
    { value: "none", label: "None" },
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "xl", label: "Extra Large" },
  ] as { value: CheckboxProps["radius"]; label: string }[];

  return (
    <div className="grid gap-4">
      {radiusExamples.map((item) => (
        <Checkbox key={item.value} radius={item.value}>
          <Checkbox.Control />
          <Checkbox.Content>
            <Label>{item.label}</Label>
          </Checkbox.Content>
        </Checkbox>
      ))}
    </div>
  );
};
