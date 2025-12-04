"use client";

import { useAlertContext } from "./alert-context";

import type { UIProps } from "@jamsrui/utils";

export const AlertContent = (props: AlertContent.Props) => {
  const { getContentProps } = useAlertContext();
  const { children, ...elementProps } = props;
  return <div {...getContentProps(elementProps)}>{children}</div>;
};

export namespace AlertContent {
  export interface Props extends UIProps<"div"> {}
}
