import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@jamsrui/react";

export const ContextMenuRadius = () => {
  const radii: ContextMenu.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {radii.map((radius) => (
        <ContextMenu key={radius} radius={radius}>
          <ContextMenuTrigger>
            <div className="border-divider text-center p-12 border-dashed border w-full">
              Radius:{radius}
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
