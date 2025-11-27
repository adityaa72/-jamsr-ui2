import { Checkbox, Description, Label } from "@jamsrui/react";

export const CheckboxSizes = () => {
  const checkboxExamples = [
    {
      size: "sm",
      label: "Agree to terms",
      description: "Smallest option for compact layouts.",
    },
    {
      size: "md",
      label: "Receive newsletters",
      description: "Standard size for general use.",
    },
    {
      size: "lg",
      label: "Enable notifications",
      description: "Larger size for better visibility.",
    },
  ] as const;
  return (
    <div className="flex flex-col gap-4">
      {checkboxExamples.map((item) => (
        <Checkbox key={item.size} size={item.size}>
          <Checkbox.Control />
          <Checkbox.Content>
            <Label>{item.label}</Label>
            <Description>{item.description}</Description>
          </Checkbox.Content>
        </Checkbox>
      ))}
    </div>
  );
};
