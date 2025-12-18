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
      ))}
    </div>
  );
};
