"use client";

import { PopoverContext } from "./popover-context";
import { usePopover } from "./use-popover";

export const Popover = (props: Popover.Props) => {
  const { children } = props;
  const ctx = usePopover(props);
  return <PopoverContext value={ctx}>{children}</PopoverContext>;
};

export namespace Popover {
  export interface Props extends usePopover.Props {
    children: React.ReactNode;
  }
}
