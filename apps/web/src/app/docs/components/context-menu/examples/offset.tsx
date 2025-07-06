import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@jamsrui/react";

export const ContextMenuOffset = () => {
  return (
    <ContextMenu offset={100}>
      <ContextMenuTrigger>
        <div className="border-divider text-center p-12 border-dashed border w-full">
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
