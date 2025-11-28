import { ChevronUpIcon } from "@jamsrui/icons";
import { Button, Menu } from "@jamsrui/react";

export const MenuColors = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>
          <ChevronUpIcon />
          Open Me
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item color="default">Default</Menu.Item>
        <Menu.Item color="primary">Primary</Menu.Item>
        <Menu.Item color="secondary">Secondary</Menu.Item>
        <Menu.Item color="success">Success</Menu.Item>
        <Menu.Item color="warning">Warning</Menu.Item>
        <Menu.Item color="danger">Danger</Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
