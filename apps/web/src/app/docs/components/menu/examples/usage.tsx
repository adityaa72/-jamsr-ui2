"use client";
import { Button, Menu } from "@jamsrui/react";

export const MenuUsage = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>Open Me</Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Undo</Menu.Item>
        <Menu.Item>Info</Menu.Item>
        <Menu.Item>Search</Menu.Item>
        <Menu.Item>Redo</Menu.Item>
        <Menu.Item>Cut</Menu.Item>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
