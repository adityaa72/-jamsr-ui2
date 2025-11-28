import { InfoIcon } from "@jamsrui/icons";
import { IconButton, Popover, Text } from "@jamsrui/react";

export const PopoverTriggerOnHover = () => {
  return (
    <Popover triggerOn="hover">
      <Popover.Trigger>
        <IconButton label="Popover Trigger">
          <InfoIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content>
        <Text>This is a Popover content</Text>
      </Popover.Content>
    </Popover>
  );
};
