"use client";

import { useMemo } from "react";

import { useRenderElement } from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";

import { OtpInputCaret } from "./otp-input-caret";
import { useOtpInputContext } from "./otp-input-context";

import type { UIProps } from "@jamsrui/utils";

export const OtpInputSlot = (props: OtpInputSlot.Props) => {
  const { getSlotProps, slots } = useOtpInputContext();
  const slot = slots[props.index];
  const isActive = slot?.isActive ?? false;
  const char = slot?.char ?? "";
  const placeholderChar = slot?.placeholderChar ?? "";
  const hasFakeCaret = slot?.hasFakeCaret ?? false;

  const children = useMemo(() => {
    if (char) return char;
    if (placeholderChar) return placeholderChar;
    if (hasFakeCaret) return <OtpInputCaret />;
    return null;
  }, [hasFakeCaret, char, placeholderChar]);

  const renderElement = useRenderElement("div", {
    props: [
      getSlotProps(props),
      {
        "data-active": dataAttr(isActive),
        children,
      },
    ],
  });
  return renderElement;
};

export namespace OtpInputSlot {
  export interface Props extends UIProps<"div"> {
    index: number;
  }
}
