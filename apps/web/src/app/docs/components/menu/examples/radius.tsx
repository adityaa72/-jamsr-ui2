import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsrui/icons";

export const MenuRadius = () => {
  const radii: Menu.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {radii.map((radius) => (
        <Menu key={radius} radius={radius}>
          <MenuTrigger>
            <Button radius={radius} endContent={<ChevronUpIcon />}>
              Open Me {radius}
            </Button>
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
