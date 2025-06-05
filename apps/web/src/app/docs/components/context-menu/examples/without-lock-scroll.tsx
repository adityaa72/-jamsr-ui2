import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@jamsr-ui/react";

export const ContextMenuWithoutLockScroll = () => {
  return (
    <ContextMenu lockScroll={false}>
      <ContextMenuTrigger>
        <div className="border-stroke-primary text-center p-12 border-dashed border w-full">
          Right Click Here
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
  );
};
