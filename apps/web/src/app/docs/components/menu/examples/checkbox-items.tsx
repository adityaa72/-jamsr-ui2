"use client";
import { Button, Menu } from "@jamsrui/react";

export const MenuCheckboxItemsExample = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>Sort</Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.CheckboxItem textValue="Date">
          <Menu.ItemIndicator />
          Date
        </Menu.CheckboxItem>
        <Menu.CheckboxItem textValue="Name">
          <Menu.ItemIndicator />
          Name
        </Menu.CheckboxItem>
        <Menu.CheckboxItem textValue="Type">
          <Menu.ItemIndicator />
          Type
        </Menu.CheckboxItem>
      </Menu.Content>
    </Menu>
  );
};
