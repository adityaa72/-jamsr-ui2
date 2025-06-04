import {
  Button,
  Kbd,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@jamsr-ui/react";
import { ChevronUpIcon, InfoIcon, SearchIcon, TrashIcon } from "@jamsrui/icons";

export const MenuStartEndContent = () => {
  return (
    <Menu>
      <MenuTrigger>
        <Button endContent={<ChevronUpIcon />}>Open Me</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>U</Kbd>}
        >
          Undo
        </MenuItem>
        <MenuItem
          startContent={
            <InfoIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>I</Kbd>}
        >
          Info
        </MenuItem>
        <MenuItem
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>K</Kbd>}
        >
          Search
        </MenuItem>
        <MenuItem
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>C</Kbd>}
        >
          Cut
        </MenuItem>
        <MenuItem
          className="hover:bg-danger"
          endContent={<Kbd keys={["command"]}>D</Kbd>}
          startContent={
            <TrashIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
        >
          Delete
        </MenuItem>
      </MenuContent>
    </Menu>
  );
};
