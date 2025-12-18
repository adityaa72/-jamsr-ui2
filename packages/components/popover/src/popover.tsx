"use client";

import { mergeConfigProps } from "@jamsrui/utils";

import { usePopoverConfig } from "./popover-config";
import { PopoverContext } from "./popover-context";
import { popoverVariants } from "./styles";
import { usePopover } from "./use-popover";

export const Popover = (props: Popover.Props) => {
  const config = usePopoverConfig();
  const mergedProps = mergeConfigProps(
    popoverVariants.defaultVariants,
    config,
    props
  );
  const { children } = props;
  const ctx = usePopover(mergedProps);
  return <PopoverContext value={ctx}>{children}</PopoverContext>;
};

export namespace Popover {
  export interface Props extends usePopover.Props {
    children: React.ReactNode;
  }
}
