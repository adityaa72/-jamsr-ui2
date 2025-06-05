import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from "@jamsrui/react";

export const ContextMenuNested = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="border-stroke-primary text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Undo</ContextMenuItem>
        <ContextMenuItem>Info</ContextMenuItem>
        <ContextMenuItem>Search</ContextMenuItem>
        <ContextMenu>
          <ContextMenuTrigger>
            <ContextMenuItem>Search</ContextMenuItem>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Undo</ContextMenuItem>
            <ContextMenuItem>Info</ContextMenuItem>
            <ContextMenuItem>Search</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ContextMenuContent>
    </ContextMenu>
  );
};
