"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useDateFieldContext } from "./date-field-context";
import { useDateField } from "./use-date-field";

export const DateFieldRoot = (props: DateFieldRoot.Props) => {
  const { as = "div", children, className, ...restProps } = props;
  const { getRootProps } = useDateFieldContext();

  const renderElement = useRenderElement(as as any, {
    props: getRootProps({
      ...restProps,
      children,
      className,
    }),
  });

  return renderElement;
};

export namespace DateFieldRoot {
  export interface Props extends UIProps<"div"> {
    as?: React.ElementType;
  }
}
