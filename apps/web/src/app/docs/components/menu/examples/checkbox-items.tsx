"use client";
import {
  Button,
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuTrigger,
} from "@jamsrui/react";

export const MenuCheckboxItemsExample = () => {
  return (
    <Menu>
      <MenuTrigger>
        <Button>Sort</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuCheckboxItem>Date</MenuCheckboxItem>
        <MenuCheckboxItem>Name</MenuCheckboxItem>
        <MenuCheckboxItem>Type</MenuCheckboxItem>
      </MenuContent>
    </Menu>
  );
};
