"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useDateFieldContext } from "./date-field-context";
import { useDateSegment } from "./use-date-segment";

import type { UIProps } from "@jamsrui/utils";

export const DateSegment = (props: DateSegment.Props) => {
  const { segment, ...restProps } = props;

  const inputProps = useDateSegment({
    segment,
  });
  const { getInputProps } = useDateFieldContext();
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

export namespace DateSegment {
  export type Segment = "day" | "month" | "year";
  export interface Props extends UIProps<"div"> {
    segment: Segment;
  }
}
