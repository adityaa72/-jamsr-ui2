import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsrui/icons";

export const MenuWithArrow = () => {
  return (
    <div className="flex justify-center">
      <Menu showArrow>
        <MenuTrigger>
          <Button endContent={<ChevronUpIcon />}>Open Me</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Info</MenuItem>
          <MenuItem>Search</MenuItem>
          <MenuItem isDisabled>Redo</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem isDisabled>Edit</MenuItem>
          <MenuItem color="danger">Delete</MenuItem>
        </MenuContent>
      </Menu>
    </div>
  );
};
