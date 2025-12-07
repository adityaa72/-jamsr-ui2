"use client";
import { useCallback, useRef, useState } from "react";

import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { dateFieldVariants } from "./styles";

import type { PropGetter } from "@jamsrui/utils";

import type { DateSegment } from "./date-segment";
import type { DateFieldSeparator } from "./date-field-separator";

type Segments = Record<DateSegment.Segment, string>;

import { DateFieldRoot } from "./date-field-root";

export const useDateField = (props: useDateField.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    dateFieldVariants.variantKeys
  );

  const [segments, setSegments] = useState<Segments>({
    day: "",
    month: "",
    year: "",
  });
  const [activeSegment, setActiveSegment] =
    useState<DateSegment.Segment>("day");

  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const styles = dateFieldVariants(variantProps);
  const getRootProps: PropGetter<DateFieldRoot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-component": dataAttrDev("date-field"),
      className: styles.root({ className: props.className }),
      "data-slot": dataAttrDev("root"),
    }),
    [styles]
  );

  const getInputProps: PropGetter<DateFieldRoot.Props> = useCallback(
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

  const getSeparatorProps: PropGetter<DateFieldSeparator.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.separator({ className: props.className }),
      "data-slot": dataAttrDev("separator"),
    }),
    [styles]
  );

  return {
    Component: DateFieldRoot,
    segments,
    activeSegment,

    getRootProps,
    getInputProps,
    getSeparatorProps,
    setActiveSegment,
    segmentList: ["day", "month", "year"] as const,
    children: null,
  };
};

export namespace useDateField {
  export interface Props {}
}
