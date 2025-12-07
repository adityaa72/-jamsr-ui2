import { Menu as MenuRoot } from "./menu";
import { MenuArrow } from "./menu-arrow";
import { MenuCheckboxItem } from "./menu-checkbox-item";
import { MenuConfig, useMenuConfig } from "./menu-config";
import { MenuContainer, MenuContainerWithContent } from "./menu-container";
import { MenuContent } from "./menu-content";
import { MenuGroup } from "./menu-group";
import { MenuGroupLabel } from "./menu-group-label";
import { MenuItem } from "./menu-item";
import { MenuItemIndicator } from "./menu-item-indicator";
import { MenuRadioGroup } from "./menu-radio-group";
import { MenuRadioItem } from "./menu-radio-item";
import { MenuSeparator } from "./menu-separator";
import { SubmenuIndicator } from "./menu-submenu-indicator";
import { MenuTrigger } from "./menu-trigger";

export {
  MenuArrow,
  MenuCheckboxItem,
  MenuConfig,
  MenuContainer,
  MenuContainerWithContent,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuItemIndicator,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
  SubmenuIndicator,
  useMenuConfig,
};

export const Menu = Object.assign(MenuRoot, {
  Group: MenuGroup,
  Item: MenuItem,
  CheckboxItem: MenuCheckboxItem,
  RadioItem: MenuRadioItem,
  RadioGroup: MenuRadioGroup,
  Separator: MenuSeparator,
  Trigger: MenuTrigger,
  GroupLabel: MenuGroupLabel,
  Content: MenuContainerWithContent,
  ContentRoot: MenuContent,
  SubmenuIndicator: SubmenuIndicator,
  ItemIndicator: MenuItemIndicator,
  Arrow: MenuArrow,
  Container: MenuContainer,
});

export namespace Menu {
  export interface Props extends MenuRoot.Props {}
  export interface Config extends MenuConfig.Props {}
  export interface CheckboxItem extends MenuCheckboxItem.Props {}
  export interface RadioItem extends MenuRadioItem.Props {}
  export interface RadioGroup extends MenuRadioGroup.Props {}
  export interface Item extends MenuItem.Props {}
  export interface Group extends MenuGroup.Props {}
  export interface GroupLabel extends MenuGroupLabel.Props {}
  export interface Separator extends MenuSeparator.Props {}
  export interface Trigger extends MenuTrigger.Props {}
  export interface Content extends MenuContainerWithContent.Props {}
  export interface ItemIndicator extends MenuItemIndicator.Props {}
  export interface Arrow extends MenuArrow.Props {}
}
