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
        <Menu.Item textValue="Click me here!" preventCloseOnClick>
          Click me here!
        </Menu.Item>
        <Menu.Item textValue="Info">Info</Menu.Item>
        <Menu.Item textValue="Search">Search</Menu.Item>
        <Menu.Item textValue="Redo" disabled>
          Redo
        </Menu.Item>
        <Menu.Item textValue="Cut">Cut</Menu.Item>
        <Menu.Item textValue="Edit" disabled>
          Edit
        </Menu.Item>
        <Menu.Item textValue="Delete" color="danger">
          Delete
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
