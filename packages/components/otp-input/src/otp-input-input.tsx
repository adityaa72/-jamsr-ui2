"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useOtpInputContext } from "./otp-input-context";

import type { UIProps } from "@jamsrui/utils";

export const OtpInputInput = (props: OtpInputInput.Props) => {
  const { getInputProps } = useOtpInputContext();
  const renderElement = useRenderElement("input", {
    props: getInputProps(),
  });
  return renderElement;
};

export namespace OtpInputInput {
  export interface Props extends UIProps<"input"> {}
}
