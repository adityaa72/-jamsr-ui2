import { ChevronUpIcon } from "@jamsrui/icons";
import { Button, Menu } from "@jamsrui/react";

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
          <Menu.Trigger>
            <Button radius={radius}>
              <ChevronUpIcon />
              Open Me {radius}
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
