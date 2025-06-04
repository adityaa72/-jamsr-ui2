import { useFloatingTree, useListItem } from "@floating-ui/react";
import { useMergeRefs, useRenderElement } from "@jamsrui/hooks";

import { useMenuContext } from "./menu-context";
import { useMenuFloatingContext } from "./menu-floating-context";
import { MenuItemInner } from "./menu-item-inner";

import type { UIProps } from "@jamsrui/utils";

import type { Menu } from "./menu";

export const MenuItem = (props: MenuItem.Props) => {
  const { getMenuItemProps } = useMenuContext();
  const tree = useFloatingTree();
  const {
    textValue,
    children,
    isDisabled,
    startContent,
    endContent,
    preventCloseOnClick,
    ...elementProps
  } = props;

  const parentCtx = useMenuFloatingContext();
  const item = useListItem({
    label: textValue ?? (typeof children === "string" ? children : undefined),
  });
  const isActive = item.index === parentCtx.activeIndex;
  const refs = useMergeRefs([item.ref]);

  const composedChildren = (
    <>
      {startContent}
      <MenuItemInner>{children}</MenuItemInner>
      {endContent}
    </>
  );
  const renderElement = useRenderElement("button", {
    props: [
      getMenuItemProps(elementProps),
      {
        children: composedChildren,
        disabled: isDisabled,
        "data-disabled": isDisabled,
        ref: refs,
        tabIndex: isActive ? 0 : -1,
        onClick() {
          if (preventCloseOnClick) {
            return;
          }
          tree?.events.emit("click");
        },
        onMouseEnter() {
          parentCtx.setHasFocusInside(true);
        },
      },
    ],
  });
  return renderElement;
};

export namespace MenuItem {
  export interface Props extends UIProps<"button"> {
    textValue?: string;
    isDisabled?: boolean;
    color?: Menu.Props["color"];
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    preventCloseOnClick?: boolean;
  }
}
