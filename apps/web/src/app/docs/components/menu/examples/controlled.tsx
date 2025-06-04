"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsrui/icons";

export const MenuControlled = () => {
  const { isOpen, onToggle, setIsOpen } = useDisclosure();
  return (
    <div className="flex items-center justify-center gap-4">
      <Menu isOpen={isOpen} onOpenChange={setIsOpen}>
        <MenuTrigger>
          <Button endContent={<ChevronUpIcon />}>Open Me</Button>
        </MenuTrigger>
        <MenuContent>
          {" "}
          <MenuItem>Undo</MenuItem>
          <MenuItem>Info</MenuItem>
          <MenuItem>Search</MenuItem>
          <MenuItem isDisabled>Redo</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem isDisabled>Edit</MenuItem>
          <MenuItem color="danger">Delete</MenuItem>
        </MenuContent>
      </Menu>
      <Button onClick={onToggle}> {isOpen ? "Close" : "Open"}</Button>
    </div>
  );
};
