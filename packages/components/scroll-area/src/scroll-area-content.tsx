"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useScrollAreaContext } from "./scroll-area-context";
import { scrollArea } from "./styles";

export const ScrollAreaContent = (props: ScrollAreaContent.Props) => {
  const { render, children, className, ...restProps } = props;
  const { contentRef } = useScrollAreaContext();
  const { content } = scrollArea();
  const styles = content({ className });

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      className: styles,
      ref: contentRef,
      render,
    },
  });
  return renderElement;
};

export namespace ScrollAreaContent {
  export interface Props extends UIProps<"div"> {}
}
