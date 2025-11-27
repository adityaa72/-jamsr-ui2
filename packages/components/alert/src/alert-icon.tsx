"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useAlertContext } from "./alert-context";

import type { UIProps } from "@jamsrui/utils";

export const AlertIcon = (props: AlertIcon.Props) => {
  const { getIconProps, icon } = useAlertContext();
  const { children = icon, ...restProps } = props;
  const renderElement = useRenderElement("span", {
    props: [getIconProps(restProps), { children }],
  });
  return renderElement;
};
export namespace AlertIcon {
  export interface Props extends UIProps<"span"> {}
}
