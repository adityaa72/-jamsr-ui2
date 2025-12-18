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
        <Menu.Item textValue="Default" color="default">
          Default
        </Menu.Item>
        <Menu.Item textValue="Primary" color="primary">
          Primary
        </Menu.Item>
        <Menu.Item textValue="Secondary" color="secondary">
          Secondary
        </Menu.Item>
        <Menu.Item textValue="Success" color="success">
          Success
        </Menu.Item>
        <Menu.Item textValue="Warning" color="warning">
          Warning
        </Menu.Item>
        <Menu.Item textValue="Danger" color="danger">
          Danger
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
