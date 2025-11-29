import { useCallback, useMemo } from "react";

import { dataAttrDev } from "@jamsrui/utils";

import { useSidebarState } from "./sidebar-state-provider";
import { sidebarVariants } from "./styles";

import type { PropGetter } from "@jamsrui/utils";

import type { Sidebar } from "./sidebar";
import type { SidebarBackdrop } from "./sidebar-backdrop";
import type { SidebarContent } from "./sidebar-content";
import type { SidebarFooter } from "./sidebar-footer";
import type { SidebarGroup } from "./sidebar-group";
import type { SidebarGroupLabel } from "./sidebar-group-label";
import type { SidebarHeader } from "./sidebar-header";
import { SidebarInset } from "./sidebar-inset";
import type { SidebarMenu } from "./sidebar-menu";
import type { SidebarMenuItem } from "./sidebar-menu-item";
import type { SidebarMenuItemButton } from "./sidebar-menu-item-button";
import { SidebarWrapper } from "./sidebar-wrapper";

export const useSidebar = (props: useSidebar.Props) => {
  const { width = 250, ...elementProps } = props;
  const styles = sidebarVariants();
  const { toggleSidebar } = useSidebarState();

  const getWrapperProps = useCallback(
    (): SidebarWrapper.Props => ({
      ...elementProps,
      style: {
        ...elementProps.style,
        "--width": `${width}px`,
      } as React.CSSProperties,
      "data-slot": dataAttrDev("wrapper"),
      className: styles.wrapper({
        className: elementProps.className,
      }),
    }),
    [styles, width, elementProps]
  );

  const getSidebarProps: PropGetter<Sidebar.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("root"),
      className: styles.sidebar({ className: props.className }),
    }),
    [styles]
  );

  const getHeaderProps: PropGetter<SidebarHeader.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("header"),
      className: styles.header({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getContentProps: PropGetter<SidebarContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getBodyProps: PropGetter<SidebarContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("body"),
      className: styles.body({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getGroupProps: PropGetter<SidebarGroup.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("group"),
      className: styles.group({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getGroupLabelProps: PropGetter<SidebarGroupLabel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("group-label"),
      className: styles.groupLabel({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getMenuProps: PropGetter<SidebarMenu.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("menu"),
      className: styles.menu({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getMenuItemProps: PropGetter<SidebarMenuItem.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("menu-item"),
      className: styles.menuItem({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getFooterProps: PropGetter<SidebarFooter.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("footer"),
      className: styles.footer({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getMenuItemButtonProps: PropGetter<SidebarMenuItemButton.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("menu-item-button"),
        className: styles.menuItemButton({
          className: props.className,
        }),
      }),
      [styles]
    );

  const getBackdropProps: PropGetter<SidebarBackdrop.Props> = useCallback(
    (props) => ({
      ...props,
      onClick: () => toggleSidebar(),
      "data-slot": dataAttrDev("backdrop"),
      className: styles.backdrop({
        className: props.className,
      }),
    }),
    [styles, toggleSidebar]
  );

  const getInsetProps: PropGetter<SidebarInset.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("inset"),
      className: styles.inset({
        className: props.className,
      }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      getRootProps: getSidebarProps,
      getHeaderProps,
      getContentProps,
      getGroupProps,
      getGroupLabelProps,
      getMenuProps,
      getMenuItemProps,
      getFooterProps,
      getMenuItemButtonProps,
      getBackdropProps,
      getBodyProps,
      getInsetProps,
      getWrapperProps,
    }),
    [
      getSidebarProps,
      getHeaderProps,
      getContentProps,
      getGroupProps,
      getGroupLabelProps,
      getMenuProps,
      getMenuItemProps,
      getFooterProps,
      getMenuItemButtonProps,
      getBackdropProps,
      getBodyProps,
      getInsetProps,
      getWrapperProps,
    ]
  );
};

export namespace useSidebar {
  export interface Props extends SidebarWrapper.Props {
    width?: number;
  }
}
