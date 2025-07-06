import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@jamsrui/react";

export const ContextMenuWithoutLockScroll = () => {
  return (
    <ContextMenu lockScroll={false}>
      <ContextMenuTrigger>
        <div className="border-divider text-center p-12 border-dashed border w-full">
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
