import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@jamsrui/react";

export const ContextMenuPlacement = () => {
  const placements: ContextMenu.Props["placement"][] = [
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
        <ContextMenu key={placement} placement={placement}>
          <ContextMenuTrigger>
            <div className="border-stroke-primary text-center p-12 border-dashed border w-full">
              Placement:{placement}
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Undo</ContextMenuItem>
            <ContextMenuItem>Info</ContextMenuItem>
            <ContextMenuItem>Search</ContextMenuItem>
            <ContextMenuItem isDisabled>Redo</ContextMenuItem>
            <ContextMenuItem>Cut</ContextMenuItem>
            <ContextMenuItem isDisabled>Edit</ContextMenuItem>
            <ContextMenuItem color="danger">Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  );
};
