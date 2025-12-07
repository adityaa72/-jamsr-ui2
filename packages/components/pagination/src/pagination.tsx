"use client";
import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const Pagination = (props: Pagination.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", {
    props: elementProps,
  });
  return renderElement;
};

export namespace Pagination {
  export interface Props extends UIProps<"div"> {}
}
