import { Popover as PopoverRoot } from "./popover";
import { PopoverArrow } from "./popover-arrow";
import { PopoverContent, PopoverContentWithDialog } from "./popover-content";
import { PopoverDialog } from "./popover-dialog";
import { PopoverTrigger } from "./popover-trigger";
export { PopoverConfig, usePopoverConfig } from "./popover-config";

export { PopoverContent } from "./popover-content";
export { PopoverTrigger } from "./popover-trigger";

export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Content: PopoverContentWithDialog,
  ContentRoot: PopoverContent,
  Trigger: PopoverTrigger,
  Dialog: PopoverDialog,
  Arrow: PopoverArrow,
});

export namespace Popover {
  export interface Props extends PopoverRoot.Props {}
  export interface Content extends PopoverContent.Props {}
  export interface Trigger extends PopoverTrigger.Props {}
  export interface Dialog extends PopoverDialog.Props {}
  export interface Arrow extends PopoverArrow.Props {}
}
