import { InfoIcon } from "@jamsrui/icons";
import {
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@jamsrui/react";

export const PopoverWithoutLockScroll = () => {
  return (
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
  );
};
