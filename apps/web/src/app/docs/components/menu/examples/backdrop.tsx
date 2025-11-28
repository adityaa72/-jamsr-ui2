import { ChevronUpIcon } from "@jamsrui/icons";
import { Button, Menu } from "@jamsrui/react";

const MenuUsage = (props: Pick<Menu.Props, "backdrop">) => {
  const { backdrop } = props;
  return (
    <Menu backdrop={backdrop}>
      <Menu.Trigger>
        <Button>
          <ChevronUpIcon />
          {backdrop ?? "Open Me"}
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Undo</Menu.Item>
        <Menu.Item>Info</Menu.Item>
        <Menu.Item>Search</Menu.Item>
        <Menu.Item isDisabled>Redo</Menu.Item>
        <Menu.Item>Cut</Menu.Item>
        <Menu.Item isDisabled>Edit</Menu.Item>
        <Menu.Item color="danger">Delete</Menu.Item>
      </Menu.Content>
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
