"use client";
import { Button, Menu } from "@jamsrui/react";

export const MenuCheckboxItemsExample = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>Sort</Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.CheckboxItem>
          <Menu.ItemIndicator />
          Date
        </Menu.CheckboxItem>
        <Menu.CheckboxItem>
          <Menu.ItemIndicator />
          Name
        </Menu.CheckboxItem>
        <Menu.CheckboxItem>
          <Menu.ItemIndicator />
          Type
        </Menu.CheckboxItem>
      </Menu.Content>
    </Menu>
  );
};
