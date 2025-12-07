"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useTimeFieldContext } from "./time-field-context";
import { useTimeSegment } from "./use-time-segment";

import type { UIProps } from "@jamsrui/utils";

export const TimeSegment = (props: TimeSegment.Props) => {
  const { segment, ...restProps } = props;

  const inputProps = useTimeSegment({
    segment,
  });
  const { getInputProps } = useTimeFieldContext();
  const renderElement = useRenderElement("div", {
    props: [
      getInputProps(restProps),
      {
        ...inputProps,
      },
    ],
  });
  return renderElement;
};

export namespace TimeSegment {
  export type Segment = "hour" | "minute" | "second" | "period";
  export interface Props extends UIProps<"div"> {
    segment: Segment;
  }
}
