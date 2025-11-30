"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useOtpInputContext } from "./otp-input-context";

import type { UIProps } from "@jamsrui/utils";

export const OtpInputGroup = (props: OtpInputGroup.Props) => {
  const { getGroupProps } = useOtpInputContext();
  const renderElement = useRenderElement("div", {
    props: getGroupProps(props),
  });
  return renderElement;
};

export namespace OtpInputGroup {
  export interface Props extends UIProps<"div"> {}
}
