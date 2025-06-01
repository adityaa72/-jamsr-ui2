import { IconButton } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsr-ui/react";
import { Text } from "@jamsr-ui/react";

export const PopoverWithArrow = () => {
  return (
    <div className="grid place-content-center">
      <Popover showArrow>
        <PopoverTrigger>
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
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
