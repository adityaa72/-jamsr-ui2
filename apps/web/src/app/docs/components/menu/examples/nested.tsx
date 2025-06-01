import { Button } from "@jamsrui/react";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@jamsrui/react";

export const MenuNested = () => {
  return (
    <div className="flex justify-center">
      <Menu>
        <MenuTrigger>
          <Button>Open Me</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Info</MenuItem>
          <MenuItem>Search</MenuItem>
          <Menu>
            <MenuTrigger>
              <MenuItem>Search</MenuItem>
            </MenuTrigger>
            <MenuContent>
              <MenuItem>Undo</MenuItem>
              <MenuItem>Info</MenuItem>
              <MenuItem>Search</MenuItem>
            </MenuContent>
          </Menu>
        </MenuContent>
      </Menu>
    </div>
  );
};
