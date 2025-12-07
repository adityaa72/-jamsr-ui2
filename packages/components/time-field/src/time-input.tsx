"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";

import { useTimeFieldContext } from "./time-field-context";
import { TimeSegment } from "./time-segment";

export const TimeInput = (props: TimeInput.Props) => {
  const { as = "div", children, ...restProps } = props;
  const { getInputProps, segmentList } = useTimeFieldContext();
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

export namespace TimeInput {
  export interface Props extends Omit<UIProps<"div">, "children"> {
    as?: React.ElementType;
    children?:
      | React.ReactNode
      | ((segment: TimeSegment.Segment) => React.ReactNode);
  }
}
