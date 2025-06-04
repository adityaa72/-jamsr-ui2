import { InfoIcon } from "@jamsrui/icons";
import {
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@jamsrui/react";

export const PopoverTriggerOnHover = () => {
  return (
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
  );
};
