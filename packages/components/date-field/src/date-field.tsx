"use client";
import { mergeConfigProps } from "@jamsrui/utils";

import { useDateFieldConfig } from "./date-field-config";
import { DateFieldContext } from "./date-field-context";
import { dateFieldVariants } from "./styles";
import { useDateField } from "./use-date-field";

export const DateField = (props: DateField.Props) => {
  const config = useDateFieldConfig();
  const mergedProps = mergeConfigProps(
    dateFieldVariants.defaultVariants,
    config,
    props
  ); // config might need updating too
  const ctx = useDateField(mergedProps);
  const { Component: Root, getRootProps, children } = ctx;

  return (
    <DateFieldContext value={ctx}>
      <Root {...getRootProps({})}>{children}</Root>
    </DateFieldContext>
  );
};

export namespace DateField {
  export interface Props extends useDateField.Props {}
}
