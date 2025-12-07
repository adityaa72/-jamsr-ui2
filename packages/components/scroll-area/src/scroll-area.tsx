"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import React from "react";
import { scrollArea, type ScrollAreaVariants } from "./styles";
import { ScrollAreaProvider } from "./scroll-area-context";
import { useScrollArea } from "./use-scroll-area";

const Root = (props: ScrollArea.Props) => {
  const { render, children, className, type, scrollHideDelay, ...restProps } =
    props;
  const context = useScrollArea({ type, scrollHideDelay });
  const { root } = scrollArea();
  const styles = root({ className });

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      className: styles,
      render,
    },
  });

  return (
    <ScrollAreaProvider value={context}>{renderElement}</ScrollAreaProvider>
  );
};

export const ScrollArea = Root;

export namespace ScrollArea {
  export interface Props extends UIProps<"div">, ScrollAreaVariants {
    type?: "auto" | "always" | "scroll" | "hover";
    scrollHideDelay?: number;
  }
}
