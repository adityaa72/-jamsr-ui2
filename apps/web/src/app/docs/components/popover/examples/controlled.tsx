"use client";

import { Button } from "@jamsr-ui/react";
import { useDisclosure } from "@jamsr-ui/hooks";
import { IconButton } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsr-ui/react";
import { Text } from "@jamsr-ui/react";

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
