"use client";
import { mergeConfigProps } from "@jamsrui/utils";

import { timeFieldVariants } from "./styles";
import { useTimeFieldConfig } from "./time-field-config";
import { TimeFieldContext } from "./time-field-context";
import { useTimeField } from "./use-time-field";

export const TimeField = (props: TimeField.Props) => {
  const config = useTimeFieldConfig();
  const mergedProps = mergeConfigProps(
    timeFieldVariants.defaultVariants,
    config,
    props
  ); // config might need updating too
  const ctx = useTimeField(mergedProps);
  const { Component: Root, getRootProps, children } = ctx;

  return (
    <TimeFieldContext value={ctx}>
      <Root {...getRootProps({} as any)}>{children}</Root>
    </TimeFieldContext>
  );
};

export namespace TimeField {
  export interface Props extends useTimeField.Props {}
}
