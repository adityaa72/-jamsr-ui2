import { Popover as PopoverRoot } from "./popover";
import { PopoverArrow } from "./popover-arrow";
import { PopoverConfig, usePopoverConfig } from "./popover-config";
import { PopoverContent, PopoverContentWithDialog } from "./popover-content";
import { PopoverContext, usePopoverContext } from "./popover-context";
import { PopoverDialog } from "./popover-dialog";
import { PopoverTrigger } from "./popover-trigger";
import { PopoverSlots, PopoverVariants, popoverVariants } from "./styles";
import { usePopover } from "./use-popover";

export {
  PopoverArrow,
  PopoverConfig,
  PopoverContent,
  PopoverContentWithDialog,
  PopoverContext,
  PopoverDialog,
  PopoverTrigger,
  popoverVariants,
  usePopover,
  usePopoverConfig,
  usePopoverContext,
  type PopoverSlots,
  type PopoverVariants,
};

export const Popover = Object.assign(PopoverRoot, {
  Content: PopoverContentWithDialog,
  ContentRoot: PopoverContent,
  Trigger: PopoverTrigger,
  Dialog: PopoverDialog,
  Arrow: PopoverArrow,
});

export namespace Popover {
  export interface Props extends PopoverRoot.Props {}
  export interface Config extends PopoverConfig.Props {}
  export interface Content extends PopoverContentWithDialog.Props {}
  export interface ContentRoot extends PopoverContent.Props {}
  export interface Trigger extends PopoverTrigger.Props {}
  export interface Dialog extends PopoverDialog.Props {}
  export interface Arrow extends PopoverArrow.Props {}
}
