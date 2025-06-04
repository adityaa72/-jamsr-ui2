import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsrui/icons";

export const MenuColors = () => {
  return (
    <div className="flex justify-center">
      <Menu>
        <MenuTrigger>
          <Button endContent={<ChevronUpIcon />}>Open Me</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem color="default">Default</MenuItem>
          <MenuItem color="primary">Primary</MenuItem>
          <MenuItem color="secondary">Secondary</MenuItem>
          <MenuItem color="success">Success</MenuItem>
          <MenuItem color="warning">Warning</MenuItem>
          <MenuItem color="danger">Danger</MenuItem>
        </MenuContent>
      </Menu>
    </div>
  );
};
