import { Button, Popover, Text } from "@jamsrui/react";

export const PopoverRadius = () => {
  const radii: Popover.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <Popover key={radius} radius={radius}>
          <Popover.Trigger>
            <Button>{radius}</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text>This is a Popover content</Text>
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
};
