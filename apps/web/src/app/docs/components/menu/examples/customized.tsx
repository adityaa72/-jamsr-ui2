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
      // classNames={{
      //   content:
      //     "min-w-[300px] bg-surface-tertiary border-2 border-primary-stroke",
      //   menuItem: "py-3 text-base px-4 font-medium hover:text-primary",
      // }}
    >
      <MenuTrigger>
        <button>
          <Avatar>
            <Avatar.Image src="https://i.pravatar.cc/150" alt="JamsrUI" />
          </Avatar>
        </button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem textValue="Undo">Undo</MenuItem>
        <MenuItem textValue="Info">Info</MenuItem>
        <MenuItem textValue="Search">Search</MenuItem>
        <MenuItem textValue="Cut">Cut</MenuItem>
      </MenuContent>
    </Menu>
  );
};
