import { IconButton } from "@jamsrui/react";
import { InfoIcon } from "@jamsrui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsrui/react";
import { Text } from "@jamsrui/react";

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
