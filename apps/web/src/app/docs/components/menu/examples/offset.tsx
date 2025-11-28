import { ChevronUpIcon } from "@jamsrui/icons";
import { Button, Menu } from "@jamsrui/react";

export const MenuOffset = () => {
  return (
    <Menu offset={20}>
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
      </Menu.Content>
    </Menu>
  );
};
