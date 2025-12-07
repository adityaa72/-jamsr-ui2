import { Sidebar as SidebarRoot } from "./sidebar";
import { SidebarBackdrop } from "./sidebar-backdrop";
import { SidebarBody } from "./sidebar-body";
import { SidebarConfig, useSidebarConfig } from "./sidebar-config";
import { SidebarContainer } from "./sidebar-container";
import { SidebarContent } from "./sidebar-content";
import { SidebarContext, useSidebarContext } from "./sidebar-context";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarGroup } from "./sidebar-group";
import { SidebarGroupLabel } from "./sidebar-group-label";
import { SidebarHeader } from "./sidebar-header";
import { SidebarInset } from "./sidebar-inset";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarMenuItem } from "./sidebar-menu-item";
import { SidebarMenuItemButton } from "./sidebar-menu-item-button";
import {
  SidebarStateProvider,
  useSidebarState,
} from "./sidebar-state-provider";
import { SidebarToggle } from "./sidebar-toggle";
import { SidebarWrapper } from "./sidebar-wrapper";

export {
  SidebarBackdrop,
  SidebarBody,
  SidebarConfig,
  SidebarContainer,
  SidebarContent,
  SidebarContext,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
  SidebarStateProvider,
  SidebarToggle,
  SidebarWrapper,
  useSidebarConfig,
  useSidebarContext,
  useSidebarState,
};

export const Sidebar = Object.assign(SidebarRoot, {
  Backdrop: SidebarBackdrop,
  Body: SidebarBody,
  Container: SidebarContainer,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupLabel: SidebarGroupLabel,
  Header: SidebarHeader,
  Inset: SidebarInset,
  Menu: SidebarMenu,
  MenuItem: SidebarMenuItem,
  MenuItemButton: SidebarMenuItemButton,
  StateProvider: SidebarStateProvider,
  Toggle: SidebarToggle,
  Wrapper: SidebarWrapper,
});

export namespace Sidebar {
  export interface Props extends SidebarRoot.Props {}
  export interface Config extends SidebarConfig.Props {}
  export interface Backdrop extends SidebarBackdrop.Props {}
  export interface Body extends SidebarBody.Props {}
  export interface Container extends SidebarContainer.Props {}
  export interface Content extends SidebarContent.Props {}
  export interface Footer extends SidebarFooter.Props {}
  export interface Group extends SidebarGroup.Props {}
  export interface GroupLabel extends SidebarGroupLabel.Props {}
  export interface Header extends SidebarHeader.Props {}
  export interface Inset extends SidebarInset.Props {}
  export interface Menu extends SidebarMenu.Props {}
  export interface MenuItem extends SidebarMenuItem.Props {}
  export interface MenuItemButton extends SidebarMenuItemButton.Props {}
  export interface StateProvider extends SidebarStateProvider.Props {}
  export interface Toggle extends SidebarToggle.Props {}
  export interface Wrapper extends SidebarWrapper.Props {}
}
