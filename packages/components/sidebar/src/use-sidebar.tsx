import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mergeProps } from "@jamsr-ui/utils";

import { sidebarVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsr-ui/utils";

import type { Sidebar } from "./sidebar";
import type { SidebarContent } from "./sidebar-content";
import type { SidebarFooter } from "./sidebar-footer";
import type { SidebarGroup } from "./sidebar-group";
import type { SidebarGroupLabel } from "./sidebar-group-label";
import type { SidebarHeader } from "./sidebar-header";
import type { SidebarMenu } from "./sidebar-menu";
import type { SidebarMenuItem } from "./sidebar-menu-item";
import type { SidebarMenuItemButton } from "./sidebar-menu-item-button";
import type { SidebarSlots } from "./styles";

export const useSidebar = (props: useSidebar.Props) => {
  const { classNames, className, slotProps, ...elementProps } = props;

  const styles = sidebarVariants();

  const getRootProps: PropGetter<Sidebar.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-slot": dataAttrDev("root"),
      className: styles.root({ className: cn(classNames?.root, className) }),
    }),
    [className, classNames?.root, elementProps, styles]
  );

  const getHeaderProps: PropGetter<SidebarHeader.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.header ?? {}, props),
      "data-slot": dataAttrDev("header"),
      className: styles.header({
        className: cn(
          slotProps?.header?.className,
          classNames?.header,
          props.className
        ),
      }),
    }),
    [classNames?.header, slotProps?.header, styles]
  );

  const getContentProps: PropGetter<SidebarContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.content ?? {}, props),
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(
          slotProps?.content?.className,
          classNames?.content,
          props.className
        ),
      }),
    }),
    [classNames?.content, slotProps?.content, styles]
  );

  const getGroupProps: PropGetter<SidebarGroup.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.group ?? {}, props),
      "data-slot": dataAttrDev("group"),
      className: styles.group({
        className: cn(
          slotProps?.group?.className,
          classNames?.group,
          props.className
        ),
      }),
    }),
    [classNames?.group, slotProps?.group, styles]
  );

  const getGroupLabelProps: PropGetter<SidebarGroupLabel.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.groupLabel ?? {}, props),
      "data-slot": dataAttrDev("group-label"),
      className: styles.groupLabel({
        className: cn(
          slotProps?.groupLabel?.className,
          classNames?.groupLabel,
          props.className
        ),
      }),
    }),
    [classNames?.groupLabel, slotProps?.groupLabel, styles]
  );

  const getMenuProps: PropGetter<SidebarMenu.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.menu ?? {}, props),
      "data-slot": dataAttrDev("menu"),
      className: styles.menu({
        className: cn(
          slotProps?.menu?.className,
          classNames?.menu,
          props.className
        ),
      }),
    }),
    [classNames?.menu, slotProps?.menu, styles]
  );

  const getMenuItemProps: PropGetter<SidebarMenuItem.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.menuItem ?? {}, props),
      "data-slot": dataAttrDev("menu-item"),
      className: styles.menuItem({
        className: cn(
          slotProps?.menuItem?.className,
          classNames?.menuItem,
          props.className
        ),
      }),
    }),
    [classNames?.menuItem, slotProps?.menuItem, styles]
  );

  const getFooterProps: PropGetter<SidebarFooter.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.footer ?? {}, props),
      "data-slot": dataAttrDev("footer"),
      className: styles.footer({
        className: cn(
          slotProps?.footer?.className,
          classNames?.footer,
          props.className
        ),
      }),
    }),
    [classNames?.footer, slotProps?.footer, styles]
  );

  const getMenuItemButtonProps: PropGetter<SidebarMenuItemButton.Props> =
    useCallback(
      (props) => ({
        ...mergeProps(slotProps?.menuItemButton ?? {}, props),
        "data-slot": dataAttrDev("menu-item-button"),
        className: styles.menuItemButton({
          className: cn(
            slotProps?.menuItemButton?.className,
            classNames?.menuItemButton,
            props.className
          ),
        }),
      }),
      [classNames?.menuItemButton, slotProps?.menuItemButton, styles]
    );

  return useMemo(
    () => ({
      getRootProps,
      getHeaderProps,
      getContentProps,
      getGroupProps,
      getGroupLabelProps,
      getMenuProps,
      getMenuItemProps,
      getFooterProps,
      getMenuItemButtonProps,
    }),
    [
      getRootProps,
      getHeaderProps,
      getContentProps,
      getGroupProps,
      getGroupLabelProps,
      getMenuProps,
      getMenuItemProps,
      getFooterProps,
      getMenuItemButtonProps,
    ]
  );
};

export namespace useSidebar {
  export interface Props extends UIProps<"div"> {
    classNames?: SlotsToClassNames<SidebarSlots>;
    slotProps?: {
      header?: SidebarHeader.Props;
      content?: SidebarContent.Props;
      group?: SidebarGroup.Props;
      groupLabel?: SidebarGroupLabel.Props;
      menu?: SidebarMenu.Props;
      menuItem?: SidebarMenuItem.Props;
      footer?: SidebarFooter.Props;
      menuItemButton?: SidebarMenuItemButton.Props;
    };
  }
}
