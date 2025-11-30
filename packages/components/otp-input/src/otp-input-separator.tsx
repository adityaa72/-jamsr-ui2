"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useOtpInputContext } from "./otp-input-context";

import type { UIProps } from "@jamsrui/utils";

export const OtpInputSeparator = (props: OtpInputSeparator.Props) => {
  const { getSeparatorProps } = useOtpInputContext();
  const renderElement = useRenderElement("div", {
    props: getSeparatorProps(props),
  });
  return renderElement;
};

export namespace OtpInputSeparator {
  export interface Props extends UIProps<"div"> {}
}
