import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";
import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { useContextMenuFloatingContext } from "./context-menu-floating-context";
import { contextMenuVariants } from "./styles";

import type {
  FloatingFocusManagerProps,
  FloatingList,
  FloatingNodeProps,
  FloatingOverlayProps,
  Placement,
} from "@floating-ui/react";
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import type { ContextMenuContent } from "./context-menu-content";
import type { ContextMenuFloatingContext } from "./context-menu-floating-context";
import type { ContextMenuItem } from "./context-menu-item";
import type { ContextMenuItemInner } from "./context-menu-item-inner";
import type { ContextMenuSlots, ContextMenuVariantProps } from "./styles";

export const useContextMenu = (props: useContextMenu.Props) => {
  const parentId = useFloatingParentNodeId();
  const isNested = parentId !== null;

  const [$props, variantProps] = mapPropsVariants(
    props,
    contextMenuVariants.variantKeys
  );

  const {
    isOpen: isOpenProp,
    defaultOpen,
    onOpenChange,
    classNames,
    closeDelay = 0,
    closeOnEscapeKey = true,
    closeOnOutsidePress = true,
    lockScroll = true,
    offset: offsetProp = 4,
    openDelay = 75,
    placement = "right-start",
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
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

  const { refs, floatingStyles, context } = useFloating({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset({
        mainAxis: offsetProp,
        alignmentAxis: isNested ? -4 : 0,
      }),
      flip({
        fallbackPlacements: ["left-start"],
      }),
      shift({ padding: 5 }),
    ],
    placement,
    whileElementsMounted: autoUpdate,
  });

  const hoverEnabled = isNested;
  const hover = useHover(context, {
    enabled: hoverEnabled,
    delay: { open: openDelay, close: closeDelay },
    handleClose: safePolygon({
      blockPointerEvents: true,
    }),
  });
  const role = useRole(context, { role: "menu" });
  const dismiss = useDismiss(context, {
    escapeKey: closeOnEscapeKey,
    outsidePress: closeOnOutsidePress,
  });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    onNavigate: setActiveIndex,
    activeIndex,
  });
  const typeahead = useTypeahead(context, {
    enabled: isOpen,
    listRef: labelsRef,
    onMatch: setActiveIndex,
    activeIndex,
  });

  const { getFloatingProps, getItemProps, getReferenceProps } = useInteractions(
    [role, hover, dismiss, listNavigation, typeahead]
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

  const styles = contextMenuVariants(variantProps);
  const isActive = isOpen && hasFocusInside && isNested;
  const parentCtx = useContextMenuFloatingContext();
  const allowMouseUpCloseRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: e.clientX,
            y: e.clientY,
            top: e.clientY,
            right: e.clientX,
            bottom: e.clientY,
            left: e.clientX,
          };
        },
      });
      setIsOpen(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      allowMouseUpCloseRef.current = false;
      timeoutRef.current = window.setTimeout(() => {
        allowMouseUpCloseRef.current = true;
      }, 300);
    },
    [refs, setIsOpen]
  );

  const itemRef = useMergeRefs([refs.setReference, item.ref]);
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
      onContextMenu: isNested ? undefined : handleContextMenu,
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
      handleContextMenu,
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
      initialFocus: 1,
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

  const getContentProps: PropGetter<ContextMenuContent.Props> = useCallback(
    () => ({
      className: styles.content({
        className: cn(classNames?.content),
      }),
    }),
    [classNames?.content, styles]
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

  const floatingCtx: ContextMenuFloatingContext.Props = useMemo(
    () => ({
      activeIndex,
      getItemProps,
      setHasFocusInside,
    }),
    [activeIndex, getItemProps]
  );

  const getMenuItemProps: PropGetter<ContextMenuItem.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("menu-item"),
      className: styles.menuItem({
        className: cn(classNames?.menuItem, props.className),
        color: props.color,
      }),
      role: "menuitem",
    }),
    [classNames?.menuItem, styles]
  );

  const getMenuItemInnerProps: PropGetter<ContextMenuItemInner.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("menu-item-inner"),
        className: styles.menuItemInner({
          className: cn(classNames?.menuItemInner, props.className),
        }),
      }),
      [classNames?.menuItemInner, styles]
    );

  return useMemo(
    () => ({
      getOverlayProps,
      getFocusManagerProps,
      getContentProps,
      getNodeProps,
      isOpen,
      getTriggerProps,
      getFloatingListProps,
      floatingCtx,
      getRootProps,
      getMenuItemProps,
      isNested,
      getMenuItemInnerProps,
    }),
    [
      floatingCtx,
      getContentProps,
      getFloatingListProps,
      getFocusManagerProps,
      getMenuItemInnerProps,
      getMenuItemProps,
      getNodeProps,
      getOverlayProps,
      getRootProps,
      getTriggerProps,
      isNested,
      isOpen,
    ]
  );
};
export namespace useContextMenu {
  export interface Props extends ContextMenuVariantProps {
    classNames?: SlotsToClassNames<ContextMenuSlots>;
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
