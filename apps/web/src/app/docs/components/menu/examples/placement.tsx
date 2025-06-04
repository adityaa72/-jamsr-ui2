import { ChevronUpIcon } from "@jamsrui/icons";
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@jamsrui/react";

export const MenuPlacement = () => {
  const placements: Menu.Props["placement"][] = [
    "bottom",
    "bottom-end",
    "bottom-start",
    "left",
    "left-end",
    "left-start",
    "right",
    "right-end",
    "right-start",
    "top",
    "top-end",
    "top-start",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement) => (
        <Menu key={placement} placement={placement}>
          <MenuTrigger>
            <Button endContent={<ChevronUpIcon />}>{placement}</Button>
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
      ))}
    </div>
  );
};
