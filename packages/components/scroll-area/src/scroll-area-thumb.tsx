"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useScrollAreaContext } from "./scroll-area-context";
import { useScrollAreaScrollbarContext } from "./scroll-area-scrollbar";
import { scrollAreaVariants } from "./styles";

import type {UIProps} from "@jamsrui/utils";

export const ScrollAreaThumb = (props: ScrollAreaThumb.Props) => {
  const { render, className, ...restProps } = props;
  const {
    thumbXRef,
    thumbYRef,
    thumbHeight,
    thumbWidth,
    handleThumbYPointerDown,
    handleThumbXPointerDown,
  } = useScrollAreaContext();
  const { orientation } = useScrollAreaScrollbarContext();

  const { thumb } = scrollAreaVariants();
  const styles = thumb({ className });

  const isVertical = orientation === "vertical";
  const ref = isVertical ? thumbYRef : thumbXRef;
  const style = isVertical ? { height: thumbHeight } : { width: thumbWidth };
  const onPointerDown = isVertical
    ? handleThumbYPointerDown
    : handleThumbXPointerDown;

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      className: styles,
      ref,
      style: { ...restProps.style, ...style },
      onPointerDown,
      render,
    },
  });
  return renderElement;
};

export namespace ScrollAreaThumb {
  export interface Props extends UIProps<"div"> {}
}
