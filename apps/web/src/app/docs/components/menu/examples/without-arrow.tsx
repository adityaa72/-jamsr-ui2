import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@jamsrui/react";
import { ChevronUpIcon } from "@jamsrui/icons";

export const MenuWithoutArrow = () => {
  return (
    <Menu hideArrow>
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
  );
};
