import { IconButton } from "@jamsrui/react";
import { InfoIcon } from "@jamsrui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsrui/react";
import { Text } from "@jamsrui/react";

export const PopoverWithoutLockScroll = () => {
  return (
    <div className="grid place-content-center">
      <Popover className="p-2" lockScroll={false}>
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
