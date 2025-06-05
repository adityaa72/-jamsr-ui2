import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  Kbd,
} from "@jamsr-ui/react";
import { InfoIcon, SearchIcon, TrashIcon } from "@jamsrui/icons";

export const ContextMenuStartEndContent = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="border-stroke-primary text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>U</Kbd>}
        >
          Undo
        </ContextMenuItem>
        <ContextMenuItem
          startContent={
            <InfoIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>I</Kbd>}
        >
          Info
        </ContextMenuItem>
        <ContextMenuItem
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>K</Kbd>}
        >
          Search
        </ContextMenuItem>
        <ContextMenuItem
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>C</Kbd>}
        >
          Cut
        </ContextMenuItem>
        <ContextMenuItem
          className="hover:bg-danger"
          endContent={<Kbd keys={["command"]}>D</Kbd>}
          startContent={
            <TrashIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
        >
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
