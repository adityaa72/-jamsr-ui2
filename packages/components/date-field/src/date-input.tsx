"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";

import { useDateFieldContext } from "./date-field-context";
import { DateSegment } from "./date-segment";

export const DateInput = (props: DateInput.Props) => {
  const { as = "div", children, ...restProps } = props;
  const { getInputProps, segmentList } = useDateFieldContext();
  const renderElement = useRenderElement(as as any, {
    props: [
      getInputProps(restProps),
      {
        children:
          typeof children === "function"
            ? segmentList.map((segment) => children(segment))
            : children,
      },
    ],
  });
  return renderElement;
};

export namespace DateInput {
  export interface Props extends Omit<UIProps<"div">, "children"> {
    as?: React.ElementType;
    children?:
      | React.ReactNode
      | ((segment: DateSegment.Segment) => React.ReactNode);
  }
}
