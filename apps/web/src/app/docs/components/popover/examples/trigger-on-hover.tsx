import { IconButton } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsr-ui/react";
import { Text } from "@jamsr-ui/react";

export const PopoverTriggerOnHover = () => {
  return (
    <div className="grid place-content-center">
      <Popover className="p-2" triggerOn="hover">
        <PopoverTrigger>
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        </PopoverTrigger>
        <PopoverContent>
          <Text>This is a Popover content</Text>
        </PopoverContent>
      </Popover>
    </div>
  );
};
