"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import React, { createContext, useContext } from "react";
import { useScrollAreaContext } from "./scroll-area-context";
import { scrollArea } from "./styles";

type ScrollAreaScrollbarContextValue = {
  orientation: "vertical" | "horizontal";
};

const ScrollAreaScrollbarContext =
  createContext<ScrollAreaScrollbarContextValue | null>(null);

export const useScrollAreaScrollbarContext = () => {
  const context = useContext(ScrollAreaScrollbarContext);
  if (!context) {
    throw new Error(
      "useScrollAreaScrollbarContext must be used within a ScrollAreaScrollbar"
    );
  }
  return context;
};

export const ScrollAreaScrollbar = (props: ScrollAreaScrollbar.Props) => {
  const {
    render,
    children,
    className,
    orientation = "vertical",
    ...restProps
  } = props;
  const { scrollbarXRef, scrollbarYRef, hasScrollX, hasScrollY } =
    useScrollAreaContext();

  const { scrollbar } = scrollArea();
  const styles = scrollbar({ className, orientation });

  if (orientation === "vertical" && !hasScrollY) return null;
  if (orientation === "horizontal" && !hasScrollX) return null;

  const ref = orientation === "vertical" ? scrollbarYRef : scrollbarXRef;

  const renderElement = useRenderElement("div", {
    props: {
      "data-orientation": orientation,
      ...restProps,
      children,
      className: styles,
      ref,
      render,
    },
  });

  return (
    <ScrollAreaScrollbarContext.Provider value={{ orientation }}>
      {renderElement}
    </ScrollAreaScrollbarContext.Provider>
  );
};

export namespace ScrollAreaScrollbar {
  export interface Props extends UIProps<"div"> {
    orientation?: "vertical" | "horizontal";
  }
}
