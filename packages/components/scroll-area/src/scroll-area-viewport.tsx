"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { useScrollAreaContext } from "./scroll-area-context";
import { scrollArea } from "./styles";
import { type UIProps } from "@jamsrui/utils";

export const ScrollAreaViewport = (props: ScrollAreaViewport.Props) => {
  const { render, children, className, ...restProps } = props;

  // Get context
  const { viewportRef, handleScroll } = useScrollAreaContext();

  const { viewport } = scrollArea();
  const styles = viewport({ className });

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children: props.children,
      className: styles,
      ref: viewportRef,
      onScroll: handleScroll,
      render: props.render,
    },
  });
  return renderElement;
};

export namespace ScrollAreaViewport {
  export interface Props extends UIProps<"div"> {}
}
