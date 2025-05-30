import { useRenderElement } from "@jamsr-ui/hooks";

import { useAlertContext } from "./alert-context";

import type { UIProps } from "@jamsr-ui/utils";

export const AlertIcon = (props: AlertIcon.Props) => {
  const { getIconProps, hideIcon, icon } = useAlertContext();
  const children = icon;
  const renderElement = useRenderElement("span", {
    props: [getIconProps(props), { children }],
  });
  if (hideIcon) return null;
  return renderElement;
};
export namespace AlertIcon {
  export interface Props extends UIProps<"span"> {}
}
