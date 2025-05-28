import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
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
import { useMergeRefs } from "@jamsr-ui/hooks";
import { useControlledState } from "@jamsr-ui/hooks";
import { cn, dataAttrDev, mapPropsVariants } from "@jamsr-ui/utils";

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
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsr-ui/utils";
import type { ComponentProps } from "react";

import type { MenuContent } from "./menu-content";
import type { MenuFloatingContext } from "./menu-floating-context";
import type { MenuItem } from "./menu-item";
import type { MenuSlots, MenuVariantProps } from "./styles";

export const useMenu = (props: useMenu.Props) => {
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
    nestedOffset,
    nestedPlacement,
    offset: offsetProp = 4,
    openDelay = 75,
    placement = "bottom-end",
    defaultOpen = false,
    onOpenChange,
    triggerOn = "click",
    classNames,
    showArrow,
  } = $props;

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const item = useListItem();
  const parentId = useFloatingParentNodeId();

  const [isOpen = false, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });
  const [hasFocusInside, setHasFocusInside] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isNested = parentId !== null;
  const arrowRef = useRef<SVGSVGElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

  const { floatingStyles, refs, context } = useFloating<HTMLDivElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      offset({
        mainAxis: offsetProp,
        alignmentAxis: isNested ? -4 : 0,
      }),
      flip(),
      shift({ padding: 5 }),
      arrow({
        element: arrowRef,
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
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
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
  }, [tree, nodeId, parentId, setIsOpen]);

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
          onMouseEnter(event) {
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
      className: styles.backdrop({
        className: classNames?.backdrop,
      }),
    }),
    [classNames?.backdrop, lockScroll, styles]
  );

  const getFocusManagerProps = useCallback(
    (): Omit<FloatingFocusManagerProps, "children"> => ({
      context,
      modal: true,
      initialFocus: 0,
      returnFocus: !isNested,
      disabled: false,
    }),
    [context, isNested]
  );

  const getRootProps = useCallback(
    () => ({
      "data-component": dataAttrDev("menu"),
      "data-slot": dataAttrDev("root"),
      className: styles.root({
        className: classNames?.root,
      }),
      ref: refs.setFloating,
      style: floatingStyles,
      ...getFloatingProps(),
    }),
    [
      classNames?.root,
      floatingStyles,
      getFloatingProps,
      refs.setFloating,
      styles,
    ]
  );

  const getContentProps: PropGetter<MenuContent.Props> = useCallback(
    () => ({
      className: styles.content({
        className: cn(classNames?.content),
      }),
    }),
    [classNames?.content, styles]
  );

  const getArrowProps = useCallback(
    (): FloatingArrowProps => ({
      context,
      ref: arrowRef,
      className: styles.arrow({
        className: classNames?.arrow,
      }),
    }),
    [classNames?.arrow, context, styles]
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
    [activeIndex, getItemProps]
  );

  const getMenuItemProps: PropGetter<MenuItem.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("menu-item"),
      className: styles.menuItem({
        className: cn(classNames?.menuItem, props.className),
      }),
      role: "menuitem",
    }),
    [classNames?.menuItem, styles]
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
      showArrow,
      floatingCtx,
      getRootProps,
      getMenuItemProps,
    }),
    [
      getOverlayProps,
      getFocusManagerProps,
      getContentProps,
      getArrowProps,
      getNodeProps,
      isOpen,
      getTriggerProps,
      getFloatingListProps,
      showArrow,
      floatingCtx,
      getRootProps,
      getMenuItemProps,
    ]
  );
};
export namespace useMenu {
  export interface Props extends MenuVariantProps {
    classNames?: SlotsToClassNames<MenuSlots>;
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
    nestedPlacement?: Placement;
    offset?: number;
    nestedOffset?: number;
    showArrow?: boolean;
  }
}
