"use client";

import { ChevronUpIcon } from "@jamsrui/icons";
import { Button, Menu } from "@jamsrui/react";

export const MenuPreventClose = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>
          <ChevronUpIcon />
          Open Me
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item preventCloseOnClick>Click me here!</Menu.Item>
        <Menu.Item>Info</Menu.Item>
        <Menu.Item>Search</Menu.Item>
        <Menu.Item isDisabled>Redo</Menu.Item>
        <Menu.Item>Cut</Menu.Item>
        <Menu.Item isDisabled>Edit</Menu.Item>
        <Menu.Item color="danger">Delete</Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
