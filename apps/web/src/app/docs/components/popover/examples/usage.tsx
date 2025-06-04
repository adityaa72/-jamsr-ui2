import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@jamsrui/react";

export const PopoverUsage = () => {
  return (
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
  );
};
