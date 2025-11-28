import { InfoIcon } from "@jamsrui/icons";
import { IconButton, Popover, Text } from "@jamsrui/react";

export const PopoverWithArrow = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <IconButton label="Popover Trigger">
          <InfoIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content className="flex flex-col gap-2">
        <Popover.Arrow />
        <Text variant="h6">Notifications</Text>
        <Text>You are all caught up. Good job!</Text>
        <Text>I am the popover content.</Text>
      </Popover.Content>
    </Popover>
  );
};
