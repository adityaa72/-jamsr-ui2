"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { ScrollAreaProvider } from "./scroll-area-context";
import { scrollAreaVariants  } from "./styles";
import { useScrollArea } from "./use-scroll-area";

import type {UIProps} from "@jamsrui/utils";

import type {ScrollAreaVariants} from "./styles";

const Root = (props: ScrollArea.Props) => {
  const { render, children, className, type, scrollHideDelay, ...restProps } =
    props;
  const context = useScrollArea({ type, scrollHideDelay });
  const { root } = scrollAreaVariants();
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
