import { Button, Popover, Text } from "@jamsrui/react";

export const PopoverPlacements = () => {
  const placements: Popover.Props["placement"][] = [
    "top",
    "top-start",
    "top-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement) => (
        <Popover key={placement} placement={placement}>
          <Popover.Trigger>
            <Button>{placement}</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text>This is a Popover content</Text>
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
};
