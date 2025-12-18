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
        <Menu.Item textValue="Undo">Undo</Menu.Item>
        <Menu.Item textValue="Info">Info</Menu.Item>
        <Menu.Item textValue="Search">Search</Menu.Item>
        <Menu.Item textValue="Redo" disabled>
          Redo
        </Menu.Item>
        <Menu.Item textValue="Cut">Cut</Menu.Item>
        <Menu.Item textValue="Edit" disabled>
          Edit
        </Menu.Item>
        <Menu.Item textValue="Delete" color="danger">
          Delete
        </Menu.Item>
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
