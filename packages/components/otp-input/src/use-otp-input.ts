import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { otpInputVariants } from "./styles";

import type { PropGetter } from "@jamsrui/utils";

import type { OtpInputCaret } from "./otp-input-caret";
import type { OtpInputGroup } from "./otp-input-group";
import type { OtpInputInput } from "./otp-input-input";
import type { OtpInputRoot } from "./otp-input-root";
import type { OtpInputSeparator } from "./otp-input-separator";
import type { OtpInputSlot } from "./otp-input-slot";
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
    onComplete,
    placeholder,
    pattern,
  } = $props;
  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    prop: valueProp,
    onChange: onValueChange,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const inputMetadataRef = useRef<
    [number | null, number | null, "none" | "forward" | "backward" | null]
  >([
    inputRef.current?.selectionStart ?? null,
    inputRef.current?.selectionEnd ?? null,
    inputRef.current?.selectionDirection ?? "none",
  ]);
  const regexp = useMemo(
    () =>
      pattern
        ? typeof pattern === "string"
          ? new RegExp(pattern)
          : pattern
        : null,
    [pattern]
  );
  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<number | null>(null);

  const handleOnBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setSelectionStart(null);
    setSelectionEnd(null);
  }, []);

  const handleOnFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (inputRef.current) {
        const start = Math.min(inputRef.current.value.length, maxLength - 1);
        const end = inputRef.current.value.length;
        inputRef.current.setSelectionRange(start, end);
        setSelectionStart(start);
        setSelectionEnd(end);
      }
    },
    [maxLength]
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value.slice(0, maxLength);
      if (newValue.length > 0 && regexp && !regexp.test(newValue)) {
        e.preventDefault();
        return;
      }

      setValue(newValue);
      if (newValue.length === maxLength) {
        onComplete?.(newValue);
      }
    },
    [maxLength, onComplete, regexp, setValue]
  );

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    inputMetadataRef.current = [
      input.selectionStart,
      input.selectionEnd,
      input.selectionDirection,
    ];

    function onDocumentSelectionChange() {
      if (!input) return;

      if (document.activeElement !== input) {
        setSelectionStart(null);
        setSelectionEnd(null);
        return;
      }

      const selectionStart = input.selectionStart;
      const selectionEnd = input.selectionEnd;
      const selectionDirection = input.selectionDirection;
      const prev = inputMetadataRef.current;
      let start = -1;
      let end = -1;
      let direction: "none" | "forward" | "backward" | undefined = undefined;

      if (
        value.length !== 0 &&
        selectionStart !== null &&
        selectionEnd !== null
      ) {
        const isSingleCaret = selectionStart === selectionEnd;
        if (isSingleCaret) {
          if (selectionStart === 0) {
            start = 0;
            end = 1;
          } else if (selectionStart === maxLength) {
            start = maxLength - 1;
            end = maxLength;
          } else if (maxLength > 1 && value.length > 1) {
            let offset = 0;
            if (prev[0] !== null && prev[1] !== null) {
              direction = selectionStart < prev[1] ? "backward" : "forward";
              const wasPreviouslyInserting =
                prev[0] === prev[1] && prev[0] < selectionStart;
              if (direction === "backward" && !wasPreviouslyInserting) {
                offset = -1;
              }
            }
            start = selectionStart + offset;
            end = start + 1;
          }
        }
        if (start != -1 && end !== -1 && start !== end) {
          input.setSelectionRange(start, end, direction);
        }
      }

      const s = start !== -1 ? start : selectionStart;
      const e = end !== -1 ? end : selectionEnd;
      const dir = direction ?? selectionDirection;
      setSelectionStart(s);
      setSelectionEnd(e);
      inputMetadataRef.current = [s, e, dir];
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
        const placeholderChar = placeholder?.[index];
        const isActive =
          selectionStart !== null &&
          selectionEnd !== null &&
          ((selectionStart === selectionEnd && selectionStart === index) ||
            (selectionStart <= index && selectionEnd > index));
        return {
          char,
          placeholderChar,
          isActive,
        };
      }),
    [placeholder, selectionEnd, selectionStart, value]
  );

  const getRootProps: PropGetter<OtpInputRoot.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("root"),
      ...props,
      className: styles.root({ className: props.className }),
    }),
    [styles]
  );

  const getGroupProps: PropGetter<OtpInputGroup.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("group"),
      ...props,
      className: styles.group({ className: props.className }),
    }),
    [styles]
  );

  const getSlotProps: PropGetter<OtpInputSlot.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("slot"),
      ...props,
      className: styles.slot({ className: props.className }),
    }),
    [styles]
  );

  const getSeparatorProps: PropGetter<OtpInputSeparator.Props> = useCallback(
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
      onChange: handleOnChange,
      onBlur: handleOnBlur,
      onFocus: handleOnFocus,
      ref: inputRef,
      maxLength,
      className: styles.input({ className: props.className }),
    }),
    [value, handleOnChange, handleOnBlur, handleOnFocus, maxLength, styles]
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
    onComplete?: (value: string) => void;
    placeholder?: string;
    pattern?: string;
  }
}
