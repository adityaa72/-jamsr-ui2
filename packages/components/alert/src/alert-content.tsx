"use client";

import { mergeProps } from "@jamsrui/utils";

import { useAlertContext } from "./alert-context";

import type { UIProps } from "@jamsrui/utils";

export const AlertContent = (props: AlertContent.Props) => {
  const { slotProps, getContentProps } = useAlertContext();
  const { children, ...elementProps } = mergeProps(
    slotProps?.content ?? {},
    props
  );
  return <div {...getContentProps(elementProps)}>{children}</div>;
};

export namespace AlertContent {
  export interface Props extends UIProps<"div"> {}
}
