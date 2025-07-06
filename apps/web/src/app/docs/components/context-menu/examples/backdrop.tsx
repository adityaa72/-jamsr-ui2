import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@jamsrui/react";

const ContextMenuUsage = (props: Pick<ContextMenu.Props, "backdrop">) => {
  const { backdrop } = props;
  return (
    <ContextMenu backdrop={backdrop}>
      <ContextMenuTrigger>
        <div className="border-divider text-center p-12 border-dashed border w-full">
          Backdrop:{backdrop}
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

export const ContextMenuBackdrop = () => {
  return (
    <div className="flex justify-center gap-4">
      <ContextMenuUsage backdrop="transparent" />
      <ContextMenuUsage backdrop="opaque" />
      <ContextMenuUsage backdrop="blur" />
    </div>
  );
};
