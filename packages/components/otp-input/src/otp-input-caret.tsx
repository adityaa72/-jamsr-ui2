"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useOtpInputContext } from "./otp-input-context";

import type { UIProps } from "@jamsrui/utils";

export const OtpInputCaret = (props: OtpInputCaret.Props) => {
  const { getCaretProps } = useOtpInputContext();
  const renderElement = useRenderElement("span", {
    props: getCaretProps(props),
  });
  return renderElement;
};

export namespace OtpInputCaret {
  export interface Props extends UIProps<"span"> {}
}
