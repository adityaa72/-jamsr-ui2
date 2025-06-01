import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const Breadcrumb = (props: Breadcrumb.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", {
    props: elementProps,
  });
  return renderElement;
};

export namespace Breadcrumb {
  export interface Props extends UIProps<"div"> {}
}
