import { Select as SelectRoot } from "./select";
import { SelectContent } from "./select-content";
import { SelectIndicator } from "./select-indicator";
import { SelectItem } from "./select-item";
import { SelectItemIndicator } from "./select-item-indicator";
import { SelectPopover } from "./select-popover";
import { SelectTrigger } from "./select-trigger";
import { SelectValue } from "./select-value";

export { SelectConfig, useSelectConfig } from "./select-config";
export { SelectItem } from "./select-item";

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Item: SelectItem,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Indicator: SelectIndicator,
  Popover: SelectPopover,
  Content: SelectContent,
  ItemIndicator: SelectItemIndicator,
});

export namespace Select {
  export interface Props extends SelectRoot.Props {}
  export interface Item extends SelectItem.Props {}
  export interface Trigger extends SelectTrigger.Props {}
  export interface Value extends SelectValue.Props {}
  export interface Indicator extends SelectIndicator.Props {}
  export interface Popover extends SelectPopover.Props {}
  export interface Content extends SelectContent.Props {}
  export interface ItemIndicator extends SelectItemIndicator.Props {}
}
