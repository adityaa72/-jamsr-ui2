"use client";
import { Button } from "@jamsr-ui/button";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@jamsr-ui/menu";

export const MenuUsage = () => {
  return (
    <Menu>
      <MenuTrigger>
        <Button>Open Me</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem
          onClick={() => {
            console.log("click on undo");
          }}
        >
          Undo
        </MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Search</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuContent>
    </Menu>
  );
};
