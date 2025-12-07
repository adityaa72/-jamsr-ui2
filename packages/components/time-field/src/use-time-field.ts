"use client";
import { useCallback, useRef, useState } from "react";

import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { timeFieldVariants } from "./styles";

import type { PropGetter } from "@jamsrui/utils";

import type { TimeSegment } from "./time-segment";
import type { TimeFieldSeparator } from "./time-field-separator";

type Segments = Record<TimeSegment.Segment, string>;

import { TimeFieldRoot } from "./time-field-root";

export const useTimeField = (props: useTimeField.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    timeFieldVariants.variantKeys
  );

  const [segments, setSegments] = useState<Segments>({
    hour: "",
    minute: "",
    second: "",
    period: "",
  });
  const [activeSegment, setActiveSegment] =
    useState<TimeSegment.Segment>("hour");

  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const styles = timeFieldVariants(variantProps);
  const getRootProps: PropGetter<TimeFieldRoot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-component": dataAttrDev("time-field"),
      className: styles.root({ className: props.className }),
      "data-slot": dataAttrDev("root"),
    }),
    [styles]
  );

  const getInputProps: PropGetter<TimeFieldRoot.Props> = useCallback(
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

  const getSeparatorProps: PropGetter<TimeFieldSeparator.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.separator({ className: props.className }),
      "data-slot": dataAttrDev("separator"),
    }),
    [styles]
  );

  return {
    Component: TimeFieldRoot,
    segments,
    activeSegment,

    getRootProps,
    getInputProps,
    getSeparatorProps,
    setActiveSegment,
    segmentList: ["hour", "minute", "period"] as const,
    children: null,
  };
};

export namespace useTimeField {
  export interface Props {}
}
