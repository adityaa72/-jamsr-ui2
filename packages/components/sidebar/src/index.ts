import { Sidebar as SidebarRoot } from "./sidebar";
import { SidebarBackdrop } from "./sidebar-backdrop";
import { SidebarBody } from "./sidebar-body";
import { SidebarContainer } from "./sidebar-container";
import { SidebarContent } from "./sidebar-content";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarGroup } from "./sidebar-group";
import { SidebarGroupLabel } from "./sidebar-group-label";
import { SidebarHeader } from "./sidebar-header";
import { SidebarInset } from "./sidebar-inset";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarMenuItem } from "./sidebar-menu-item";
import { SidebarMenuItemButton } from "./sidebar-menu-item-button";
import { SidebarStateProvider } from "./sidebar-state-provider";
import { SidebarToggle } from "./sidebar-toggle";
import { SidebarWrapper } from "./sidebar-wrapper";

export { SidebarConfig, useSidebarConfig } from "./sidebar-config";
export { SidebarContext, useSidebarContext } from "./sidebar-context";
export { useSidebarState } from "./sidebar-state-provider";

export {
  SidebarBackdrop,
  SidebarBody,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
  SidebarStateProvider,
  SidebarToggle,
};

export const Sidebar = Object.assign(SidebarRoot, {
  Backdrop: SidebarBackdrop,
  Body: SidebarBody,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupLabel: SidebarGroupLabel,
  Header: SidebarHeader,
  Menu: SidebarMenu,
  MenuItem: SidebarMenuItem,
  MenuItemButton: SidebarMenuItemButton,
  StateProvider: SidebarStateProvider,
  Toggle: SidebarToggle,
  Inset: SidebarInset,
  Wrapper: SidebarWrapper,
  Container: SidebarContainer,
});
