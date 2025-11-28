"use client";

import { useDisclosure } from "@jamsrui/hooks";
import { InfoIcon } from "@jamsrui/icons";
import { Button, IconButton, Popover, Text } from "@jamsrui/react";

export const PopoverControlled = () => {
  const { isOpen, setIsOpen, onToggle } = useDisclosure();
  return (
    <div className="flex flex-col items-center gap-4">
      <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger>
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content>
          <Text>This is a Popover content</Text>
        </Popover.Content>
      </Popover>
      <Button onClick={onToggle}>{isOpen ? "Close" : "Open"}</Button>
    </div>
  );
};
