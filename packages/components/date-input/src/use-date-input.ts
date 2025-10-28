import { useCallback, useRef, useState } from "react";

import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { dateInputVariants } from "./styles";

import type { PropGetter } from "@jamsrui/utils";

import type { DateInputRoot } from "./date-input-root";
import type { DateInputSegment } from "./date-input-segment";
import type { DateInputSeparator } from "./date-input-separator";

type Segments = Record<DateInputSegment.Segment, string>;

export const useDateInput = (props: useDateInput.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    dateInputVariants.variantKeys
  );

  const [segments, setSegments] = useState<Segments>({
    day: "",
    month: "",
    year: "",
  });
  const [activeSegment, setActiveSegment] =
    useState<DateInputSegment.Segment>("day");

  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const styles = dateInputVariants(variantProps);
  const getRootProps: PropGetter<DateInputRoot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-component": dataAttrDev("date-input"),
      className: styles.root({ className: props.className }),
      "data-slot": dataAttrDev("root"),
    }),
    [styles]
  );

  const getInputProps: PropGetter<DateInputRoot.Props> = useCallback(
    (props) => ({
      ...props,
      contentEditable: true,
      suppressContentEditableWarning: true,
      className: styles.input({ className: props.className }),
      "data-slot": dataAttrDev("input"),
      inputMode: "numeric",
      spellCheck: false,
    }),
    [styles]
  );

  const getSeparatorProps: PropGetter<DateInputSeparator.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.separator({ className: props.className }),
      "data-slot": dataAttrDev("separator"),
    }),
    [styles]
  );

  return {
    segments,
    activeSegment,

    getRootProps,
    getInputProps,
    getSeparatorProps,
    setActiveSegment,
  };
};

export namespace useDateInput {
  export interface Props {}
}
