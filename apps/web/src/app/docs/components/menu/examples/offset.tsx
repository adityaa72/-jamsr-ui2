import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsrui/icons";

export const MenuOffset = () => {
  return (
    <Menu offset={20}>
      <MenuTrigger>
        <Button endContent={<ChevronUpIcon />}>Open Me</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Search</MenuItem>
      </MenuContent>
    </Menu>
  );
};
