import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@jamsrui/react";

export const ContextMenuUsage = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="border-divider text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem>Delete</ContextMenuItem>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuItem>Others</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
