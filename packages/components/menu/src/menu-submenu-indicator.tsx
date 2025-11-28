"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { ChevronRightIcon } from "@jamsrui/icons";

import { useMenuContext } from "./menu-context";

import type { UIProps } from "@jamsrui/utils";

export const SubmenuIndicator = (props: SubmenuIndicator.Props) => {
  const {
    children = <ChevronRightIcon className="size-full" />,
    ...restProps
  } = props;
  const { getSubmenuIndicatorProps } = useMenuContext();
  const renderElement = useRenderElement("span", {
    props: [getSubmenuIndicatorProps(restProps), { children }],
  });
  return renderElement;
};

export namespace SubmenuIndicator {
  export interface Props extends UIProps<"span"> {}
}
