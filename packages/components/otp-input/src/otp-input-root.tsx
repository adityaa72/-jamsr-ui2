"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useOtpInputContext } from "./otp-input-context";

import type { UIProps } from "@jamsrui/utils";

export const OtpInputRoot = (props: OtpInputRoot.Props) => {
  const { getRootProps } = useOtpInputContext();
  const renderElement = useRenderElement("div", {
    props: getRootProps(props),
  });
  return renderElement;
};

export namespace OtpInputRoot {
  export interface Props extends UIProps<"div"> {}
}
