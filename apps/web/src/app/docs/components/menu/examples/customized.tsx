import {
  Avatar,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@jamsrui/react";
import { type Variants } from "motion/react";

const motionVariants: Variants = {
  initial: { scale: 0.97 },
  animate: { scale: 1 },
  exit: { scale: 0.97 },
};

export const MenuCustomized = () => {
  return (
    <Menu
      radius="2xl"
      classNames={{
        content:
          "min-w-[300px] bg-surface-tertiary border-2 border-primary-stroke",
        menuItem: "py-3 text-base px-4 font-medium hover:text-primary",
      }}
    >
      <MenuTrigger>
        <button>
          <Avatar src="https://i.pravatar.cc/150" alt="JamsrUI" />
        </button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Search</MenuItem>
        <MenuItem>Cut</MenuItem>
      </MenuContent>
    </Menu>
  );
};
