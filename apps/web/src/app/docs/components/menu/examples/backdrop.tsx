import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@jamsrui/react";
import { ChevronUpIcon } from "@jamsrui/icons";

const MenuUsage = (props: Pick<Menu.Props, "backdrop">) => {
  const { backdrop } = props;
  return (
    <Menu backdrop={backdrop}>
      <MenuTrigger>
        <Button endContent={<ChevronUpIcon />}>{backdrop ?? "Open Me"}</Button>
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

export const MenuBackdrop = () => {
  return (
    <div className="flex justify-center gap-4">
      <MenuUsage backdrop="transparent" />
      <MenuUsage backdrop="opaque" />
      <MenuUsage backdrop="blur" />
    </div>
  );
};
