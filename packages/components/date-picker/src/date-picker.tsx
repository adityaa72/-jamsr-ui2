"use client";
import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const DatePicker = (props: DatePicker.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", {
    props: elementProps,
  });
  return renderElement;
};

export namespace DatePicker {
  export interface Props extends UIProps<"div"> {}
}
