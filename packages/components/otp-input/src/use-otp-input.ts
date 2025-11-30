import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { otpInputVariants } from "./styles";

import type { PropGetter } from "@jamsrui/utils";

import type { OtpInput } from "./otp-input";
import type { OtpInputCaret } from "./otp-input-caret";
import type { OtpInputInput } from "./otp-input-input";
import type { OtpInputRoot } from "./otp-input-root";
import type { OtpInputVariants } from "./styles";

export const useOtpInput = (props: useOtpInput.Props) => {
  const [$props, variantKeys] = mapPropsVariants(
    props,
    otpInputVariants.variantKeys
  );
  const styles = otpInputVariants(variantKeys);
  const {
    value: valueProp,
    onValueChange,
    defaultValue,
    disabled,
    maxLength,
  } = $props;
  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    prop: valueProp,
    onChange: onValueChange,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<number | null>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    function onDocumentSelectionChange() {
      if (!input) return;
      console.log("selectionchange");

      if (document.activeElement !== input) {
        return;
      }

      const selectionStart = input.selectionStart;
      const selectionEnd = input.selectionEnd;
      const selectionDirection = input.selectionDirection;

      let start = -1;
      let end = -1;
      let direction = undefined;

      if (
        value.length !== 0 &&
        selectionStart !== null &&
        selectionEnd !== null
      ) {
        const isSingleCaret = selectionStart === selectionEnd;
        console.log({ isSingleCaret });

        if (isSingleCaret) {
          if (selectionStart === 0) {
            start = 0;
            end = 1;
          } else if (selectionStart === maxLength) {
            start = maxLength - 1;
            end = maxLength;
          } else if (maxLength > 1 && value.length > 1) {
            start = selectionStart;
            end = start + 1;
          }
        }

        if (start != -1 && end !== -1 && start !== end) {
          console.log({ start, end });
          input.setSelectionRange(start, end, "forward");
        }
      }

      const s = start !== -1 ? start : selectionStart;
      const e = end !== -1 ? end : selectionEnd;
      setSelectionStart(s);
      setSelectionEnd(e);
    }

    document.addEventListener("selectionchange", onDocumentSelectionChange, {
      capture: true,
    });
    return () => {
      document.removeEventListener(
        "selectionchange",
        onDocumentSelectionChange,
        {
          capture: true,
        }
      );
    };
  }, [maxLength, value]);

  const slots = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, index) => {
        const char = value[index] ?? null;
        const placeholderChar = "-";
        const isActive =
          selectionStart !== null &&
          selectionEnd !== null &&
          ((selectionStart === selectionEnd && selectionStart === index) ||
            (selectionStart <= index && selectionEnd > index));
        const hasFakeCaret = false;
        return {
          char,
          placeholderChar,
          isActive,
          hasFakeCaret,
        };
      }),
    [selectionEnd, selectionStart, value]
  );

  const getRootProps: PropGetter<OtpInputRoot.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("root"),
      ...props,
      className: styles.root({ className: props.className }),
    }),
    [styles]
  );

  const getGroupProps: PropGetter<OtpInput.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("group"),
      ...props,
      className: styles.group({ className: props.className }),
    }),
    [styles]
  );

  const getSlotProps: PropGetter<OtpInput.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("slot"),
      ...props,
      className: styles.slot({ className: props.className }),
    }),
    [styles]
  );

  const getSeparatorProps: PropGetter<OtpInput.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("separator"),
      ...props,
      className: styles.separator({ className: props.className }),
    }),
    [styles]
  );

  const getInputProps: PropGetter<OtpInputInput.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("input"),
      ...props,
      value,
      onChange: handleValueChange,
      ref: inputRef,
      maxLength,
      className: styles.input({ className: props.className }),
    }),
    [handleValueChange, styles, value]
  );

  const getCaretProps: PropGetter<OtpInputCaret.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("caret"),
      ...props,
      className: styles.caret({ className: props.className }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getGroupProps,
      getSlotProps,
      getSeparatorProps,
      getInputProps,
      getCaretProps,
      slots,
    }),
    [
      getRootProps,
      getGroupProps,
      getSlotProps,
      getSeparatorProps,
      getInputProps,
      getCaretProps,
      slots,
    ]
  );
};

export namespace useOtpInput {
  export interface Props extends OtpInputVariants, OtpInputRoot.Props {
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    disabled?: boolean;
    maxLength: number;
  }
}
