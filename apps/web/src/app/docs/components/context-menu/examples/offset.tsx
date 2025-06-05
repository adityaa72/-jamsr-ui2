import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@jamsr-ui/react";

export const ContextMenuOffset = () => {
  return (
    <ContextMenu offset={100}>
      <ContextMenuTrigger>
        <div className="border-stroke-primary text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Undo</ContextMenuItem>
        <ContextMenuItem>Info</ContextMenuItem>
        <ContextMenuItem>Search</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
