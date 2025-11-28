"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { CheckIcon } from "@jamsrui/icons";

import { useMenuContext } from "./menu-context";

import type { UIProps } from "@jamsrui/utils";
import { useMenuItemIndicatorContext } from "./menu-item-indicator-context";

export const MenuItemIndicator = (props: MenuItemIndicator.Props) => {
  const { children = <CheckIcon className="size-full" />, ...restProps } =
    props;
  const { getMenuItemIndicatorProps } = useMenuContext();
  const { isChecked } = useMenuItemIndicatorContext();
  const renderElement = useRenderElement("span", {
    props: [
      getMenuItemIndicatorProps(restProps),
      { children: isChecked ? children : null },
    ],
  });
  return renderElement;
};

export namespace MenuItemIndicator {
  export interface Props extends UIProps<"span"> {}
}
