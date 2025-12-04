import { Button, Menu } from "@jamsrui/react";

export const MenuUsage = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>Open Me</Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item textValue="Undo">Undo</Menu.Item>
        <Menu.Item textValue="Info">Info</Menu.Item>
        <Menu.Item textValue="Search">Search</Menu.Item>
        <Menu.Item textValue="Redo">Redo</Menu.Item>
        <Menu.Item textValue="Cut">Cut</Menu.Item>
        <Menu.Item textValue="Edit">Edit</Menu.Item>
        <Menu.Item textValue="Delete">Delete</Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
