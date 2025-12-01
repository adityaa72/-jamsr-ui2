import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import { useControlledState, useMergeRefs } from "@jamsrui/hooks";
import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { useMenuFloatingContext } from "./menu-floating-context";
import { menuVariants } from "./styles";

import type {
  FloatingArrowProps,
  FloatingFocusManagerProps,
  FloatingList,
  FloatingNodeProps,
  FloatingOverlayProps,
  Placement,
} from "@floating-ui/react";
import type { PropGetter, UIProps } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import type { MenuContainer } from "./menu-container";
import type { MenuContent } from "./menu-content";
import type { MenuFloatingContext } from "./menu-floating-context.tsx";
import type { MenuGroup } from "./menu-group";
import type { MenuGroupLabel } from "./menu-group-label";
import type { MenuItem } from "./menu-item";
import type { MenuItemIndicator } from "./menu-item-indicator";
import type { SubmenuIndicator } from "./menu-submenu-indicator";
import type { MenuVariantProps } from "./styles";

export const useMenu = (props: useMenu.Props) => {
  const parentId = useFloatingParentNodeId();
  const isNested = parentId !== null;

  const [$props, variantProps] = mapPropsVariants(
    props,
    menuVariants.variantKeys
  );
  const {
    closeDelay = 0,
    closeOnEscapeKey = true,
    closeOnOutsidePress = true,
    isOpen: isOpenProp,
    lockScroll = true,
    offset: offsetProp = 4,
    openDelay = 75,
    placement = isNested ? "right-start" : "bottom",
    defaultOpen = false,
    onOpenChange,
    triggerOn = "click",
  } = $props;

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const item = useListItem();

  const [isOpen = false, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });
  const [hasFocusInside, setHasFocusInside] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [arrowEl, setArrowEl] = useState<SVGSVGElement | null>(null);

  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

  const arrowHeight = arrowEl ? 7 : 0;

  const { floatingStyles, refs, context } = useFloating<HTMLDivElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      offset({
        mainAxis: offsetProp + arrowHeight,
        alignmentAxis: isNested ? -4 : 0,
      }),
      flip(),
      shift({ padding: 5 }),
      arrow({
        element: arrowEl,
      }),
      size({
        apply({ availableHeight, elements, availableWidth }) {
          elements.floating.style.setProperty(
            "--available-width",
            `${availableWidth}px`
          );
          elements.floating.style.setProperty(
            "--available-height",
            `${availableHeight}px`
          );
          elements.floating.style.setProperty("--transform-origin", "top left");
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hoverEnabled = triggerOn === "hover" || isNested;
  const hover = useHover(context, {
    enabled: hoverEnabled,
    delay: { open: openDelay, close: closeDelay },
    handleClose: safePolygon({
      blockPointerEvents: true,
    }),
  });
  const click = useClick(context, {
    event: "mousedown",
    toggle: !isNested,
    ignoreMouse: isNested,
  });
  const role = useRole(context, { role: "menu" });
  const dismiss = useDismiss(context, {
    bubbles: true,
    escapeKey: closeOnEscapeKey,
    outsidePress: closeOnOutsidePress,
  });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  });
  const typeahead = useTypeahead(context, {
    enabled: isOpen,
    listRef: labelsRef,
    onMatch: setActiveIndex,
    activeIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, role, dismiss, listNavigation, typeahead]
  );

  useEffect(() => {
    if (!tree) return;
    function handleTreeClick() {
      setIsOpen(false);
    }
    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    }

    tree.events.on("click", handleTreeClick);
    tree.events.on("menuopen", onSubMenuOpen);

    return () => {
      tree.events.off("click", handleTreeClick);
      tree.events.off("menuopen", onSubMenuOpen);
    };
  }, [tree, nodeId, parentId, setIsOpen, isOpen]);

  useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit("menuopen", { parentId, nodeId });
    }
  }, [tree, isOpen, nodeId, parentId]);

  const styles = menuVariants(variantProps);

  const isActive = isOpen && hasFocusInside && isNested;
  const itemRef = useMergeRefs([refs.setReference, item.ref]);
  const parentCtx = useMenuFloatingContext();

  const getTriggerProps = useCallback(
    (): UIProps<"div"> => ({
      ref: itemRef,
      tabIndex: isNested
        ? parentCtx.activeIndex === item.index
          ? 0
          : -1
        : undefined,
      "data-slot": dataAttrDev("trigger"),
      role: isNested ? "menuitem" : undefined,
      "data-active": isActive,
      "data-nested": isNested,
      "data-open": isOpen,
      ...getReferenceProps({
        ...parentCtx.getItemProps({
          onMouseEnter() {
            setHasFocusInside(false);
            parentCtx.setHasFocusInside(true);
          },
        }),
      }),
    }),
    [
      getReferenceProps,
      isActive,
      isNested,
      isOpen,
      item.index,
      itemRef,
      parentCtx,
    ]
  );

  const getOverlayProps = useCallback(
    (): FloatingOverlayProps & UIProps<"div"> => ({
      lockScroll,
      "data-slot": dataAttrDev("overlay"),
      className: styles.backdrop(),
    }),
    [lockScroll, styles]
  );

  const getFocusManagerProps = useCallback(
    (): Omit<FloatingFocusManagerProps, "children"> => ({
      context,
      modal: true,
      initialFocus: 1,
      returnFocus: !isNested,
      disabled: false,
    }),
    [context, isNested]
  );

  const getContainerProps: PropGetter<MenuContainer.Props> = useCallback(
    (props: MenuContainer.Props) => ({
      ...props,
      "data-component": dataAttrDev("menu"),
      "data-slot": dataAttrDev("container"),
      className: styles.container(),
      ref: refs.setFloating,
      style: floatingStyles,
      ...getFloatingProps(),
    }),
    [floatingStyles, getFloatingProps, refs.setFloating, styles]
  );

  const getContentProps: PropGetter<MenuContent.Props> = useCallback(
    () => ({
      className: styles.content(),
    }),
    [styles]
  );

  const getArrowProps = useCallback(
    (props: Partial<FloatingArrowProps>): FloatingArrowProps => ({
      tipRadius: 6,
      ...props,
      context,
      ref: setArrowEl,
      className: styles.arrow({ className: props.className }),
    }),
    [context, setArrowEl, styles]
  );

  const getNodeProps = useCallback(
    (): FloatingNodeProps => ({
      id: nodeId,
    }),
    [nodeId]
  );

  const getFloatingListProps = useCallback(
    (): Omit<ComponentProps<typeof FloatingList>, "children"> => ({
      elementsRef,
      labelsRef,
    }),
    []
  );

  const floatingCtx: MenuFloatingContext.Props = useMemo(
    () => ({
      activeIndex,
      getItemProps,
      setHasFocusInside,
    }),
    [activeIndex, getItemProps, setHasFocusInside]
  );

  const getMenuItemProps: PropGetter<Partial<MenuItem.Props>> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("menu-item"),
      className: styles.menuItem({
        className: props.className,
        color: props.color,
      }),
      role: "menuitem",
    }),
    [styles]
  );

  const getSubmenuIndicatorProps: PropGetter<SubmenuIndicator.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("submenu-indicator"),
        className: styles.submenuIndicator({ className: props.className }),
      }),
      [styles]
    );

  const getMenuItemIndicatorProps: PropGetter<MenuItemIndicator.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("menu-item-indicator"),
        className: styles.menuItemIndicator({
          className: props.className,
        }),
      }),
      [styles]
    );

  const getMenuGroupProps: PropGetter<MenuGroup.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("menu-group"),
      className: styles.menuGroup({ className: props.className }),
    }),
    [styles]
  );

  const getMenuGroupLabelProps: PropGetter<MenuGroupLabel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("menu-group-label"),
      className: styles.menuGroupLabel({ className: props.className }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      getOverlayProps,
      getFocusManagerProps,
      getContentProps,
      getArrowProps,
      getNodeProps,
      isOpen,
      getTriggerProps,
      getFloatingListProps,
      floatingCtx,
      getContainerProps,
      getMenuItemProps,
      isNested,
      getSubmenuIndicatorProps,
      getMenuGroupProps,
      getMenuGroupLabelProps,
      placement,
      getMenuItemIndicatorProps,
    }),
    [
      getMenuItemIndicatorProps,
      getOverlayProps,
      getFocusManagerProps,
      getContentProps,
      getArrowProps,
      getNodeProps,
      isOpen,
      getTriggerProps,
      getFloatingListProps,
      floatingCtx,
      getContainerProps,
      getMenuItemProps,
      isNested,
      getSubmenuIndicatorProps,
      getMenuGroupProps,
      getMenuGroupLabelProps,
      placement,
    ]
  );
};
export namespace useMenu {
  export interface Props extends MenuVariantProps {
    triggerOn?: "hover" | "click";
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    openDelay?: number;
    closeDelay?: number;
    closeOnEscapeKey?: boolean;
    closeOnOutsidePress?: boolean;
    lockScroll?: boolean;
    placement?: Placement;
    offset?: number;
  }
}
