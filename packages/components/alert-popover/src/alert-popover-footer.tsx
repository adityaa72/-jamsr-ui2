import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const AlertPopoverFooter = (props: AlertPopoverFooter.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace AlertPopoverFooter {
  export interface Props extends UIProps<"div"> {}
}
