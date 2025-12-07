"use client";
import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const ScrollArea = (props: ScrollArea.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", {
    props: elementProps,
  });
  return renderElement;
};

export namespace ScrollArea {
  export interface Props extends UIProps<"div"> {}
}
