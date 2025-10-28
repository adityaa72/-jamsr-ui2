import { useRenderElement } from "@jamsrui/hooks";

import { useDateInputContext } from "./date-input-context";
import { useDateInputSegment } from "./use-date-input-segment";

import type { UIProps } from "@jamsrui/utils";

export const DateInputSegment = (props: DateInputSegment.Props) => {
  const { segment, ...restProps } = props;

  const inputProps = useDateInputSegment({
    segment,
  });
  const { getInputProps } = useDateInputContext();
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

export namespace DateInputSegment {
  export type Segment = "day" | "month" | "year";
  export interface Props extends UIProps<"div"> {
    segment: Segment;
  }
}
