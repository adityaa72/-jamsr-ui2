import { ChevronUpIcon } from "@jamsrui/icons";
import { Button, Menu } from "@jamsrui/react";

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
          <Menu.Trigger>
            <Button>
              <ChevronUpIcon />
              {placement}
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
      ))}
    </div>
  );
};
