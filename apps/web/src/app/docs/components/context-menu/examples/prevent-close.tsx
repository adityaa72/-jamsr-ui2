"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@jamsr-ui/react";

export const ContextMenuPreventClose = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="border-stroke-primary text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem preventCloseOnClick>Click me here!</ContextMenuItem>
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
