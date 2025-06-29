import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const AlertPopoverBody = (props: AlertPopoverBody.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace AlertPopoverBody {
  export interface Props extends UIProps<"div"> {}
}
