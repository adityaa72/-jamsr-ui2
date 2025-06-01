import { Button } from "@jamsr-ui/react";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@jamsr-ui/react";

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
