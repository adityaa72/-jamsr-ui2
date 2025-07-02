import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@jamsr-ui/react";

export const ContextMenuColors = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="border-divider text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem color="default">Default</ContextMenuItem>
        <ContextMenuItem color="primary">Primary</ContextMenuItem>
        <ContextMenuItem color="secondary">Secondary</ContextMenuItem>
        <ContextMenuItem color="success">Success</ContextMenuItem>
        <ContextMenuItem color="warning">Warning</ContextMenuItem>
        <ContextMenuItem color="danger">Danger</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
