import { Button } from "@jamsr-ui/react";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsr-ui/react";
import { Text } from "@jamsr-ui/react";

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
        <Popover key={placement} placement={placement} triggerOn="hover">
          <PopoverTrigger>
            <Button>{placement}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Text>This is a Popover content</Text>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
};
