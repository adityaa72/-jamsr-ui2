import { Button } from "@jamsr-ui/react";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsr-ui/react";
import { Text } from "@jamsr-ui/react";

export const PopoverUsage = () => {
  return (
    <div className="grid min-h-[100px] place-items-center">
      <Popover backdrop="blur" placement="bottom">
        <PopoverTrigger>
          <Button>Press Me!</Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-2">
          <Text variant="h6">Notifications</Text>
          <Text>You are all caught up. Good job!</Text>
          <Text>I am the popover content.</Text>
        </PopoverContent>
      </Popover>
    </div>
  );
};
