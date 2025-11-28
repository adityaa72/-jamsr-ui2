"use client";

import { useDisclosure } from "@jamsrui/hooks";
import { ChevronUpIcon } from "@jamsrui/icons";
import { Button, Menu } from "@jamsrui/react";

export const MenuControlled = () => {
  const { isOpen, onToggle, setIsOpen } = useDisclosure();
  return (
    <div className="flex items-center justify-center gap-4">
      <Menu isOpen={isOpen} onOpenChange={setIsOpen}>
        <Menu.Trigger>
          <Button>
            <ChevronUpIcon />
            Open Me
          </Button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Info</Menu.Item>
          <Menu.Item>Search</Menu.Item>
          <Menu.Item isDisabled>Redo</Menu.Item>
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item isDisabled>Edit</Menu.Item>
          <Menu.Item color="danger">Delete</Menu.Item>
        </Menu.Content>
      </Menu>
      <Button onClick={onToggle}> {isOpen ? "Close" : "Open"}</Button>
    </div>
  );
};
