"use client";

import { Button } from "@jamsrui/react";
import { useDisclosure } from "@jamsrui/hooks";
import { IconButton } from "@jamsrui/react";
import { InfoIcon } from "@jamsrui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsrui/react";
import { Text } from "@jamsrui/react";

export const PopoverControlled = () => {
  const { isOpen, setIsOpen, onToggle } = useDisclosure();
  return (
    <div className="flex flex-col items-center gap-4">
      <Popover isOpen={isOpen} onOpenChange={setIsOpen} showArrow>
        <PopoverTrigger>
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        </PopoverTrigger>
        <PopoverContent>
          <Text>This is a Popover content</Text>
        </PopoverContent>
      </Popover>
      <Button onClick={onToggle}>{isOpen ? "Close" : "Open"}</Button>
    </div>
  );
};
