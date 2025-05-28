import { useFloatingTree, useListItem } from "@floating-ui/react";
import { useMergeRefs, useRenderElement } from "@jamsr-ui/hooks";

import { useMenuContext } from "./menu-context";
import { useMenuFloatingContext } from "./menu-floating-context";

import type { UIProps } from "@jamsr-ui/utils";

export const MenuItem = (props: MenuItem.Props) => {
  const { getMenuItemProps } = useMenuContext();
  const tree = useFloatingTree();
  const { textValue, children } = props;

  const parentCtx = useMenuFloatingContext();
  const item = useListItem({
    label: textValue ?? (typeof children === "string" ? children : undefined),
  });
  const isActive = item.index === parentCtx.activeIndex;
  const refs = useMergeRefs([item.ref]);

  const renderElement = useRenderElement("button", {
    props: [
      getMenuItemProps(props),
      {
        ref: refs,
        tabIndex: isActive ? 0 : -1,
        onClick() {
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
  }
}
