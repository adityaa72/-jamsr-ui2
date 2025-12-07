"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useTimeFieldContext } from "./time-field-context";
import { useTimeField } from "./use-time-field";

export const TimeFieldRoot = (props: TimeFieldRoot.Props) => {
  const { as = "div", children, className, ...restProps } = props;
  const { getRootProps } = useTimeFieldContext();

  const renderElement = useRenderElement(as as any, {
    props: getRootProps({
      ...restProps,
      children,
      className,
    }),
  });

  return renderElement;
};

export namespace TimeFieldRoot {
  export interface Props extends UIProps<"div"> {
    as?: React.ElementType;
  }
}
