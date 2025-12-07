"use client";
import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const Charts = (props: Charts.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", {
    props: elementProps,
  });
  return renderElement;
};

export namespace Charts {
  export interface Props extends UIProps<"div"> {}
}
