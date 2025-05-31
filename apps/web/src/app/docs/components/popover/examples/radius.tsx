import { Button } from "@jamsr-ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsr-ui/popover";
import { Text } from "@jamsr-ui/text";

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
        <Popover key={radius} radius={radius} triggerOn="hover">
          <PopoverTrigger>
            <Button>{radius}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Text>This is a Popover content</Text>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
};
