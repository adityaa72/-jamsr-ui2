"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useScrollAreaContext } from "./scroll-area-context";
import { scrollArea } from "./styles";

export const ScrollAreaCorner = (props: ScrollAreaCorner.Props) => {
  const { render, className, ...restProps } = props;
  const { hasScrollX, hasScrollY } = useScrollAreaContext();
  const { corner } = scrollArea();
  const styles = corner({ className });

  if (!hasScrollX || !hasScrollY) return null;

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      className: styles,
      render,
    },
  });
  return renderElement;
};

export namespace ScrollAreaCorner {
  export interface Props extends UIProps<"div"> {}
}
