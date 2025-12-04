"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { dataAttrDev, mergeProps } from "@jamsrui/utils";

import { NumberParser } from "./parser";
import { NumberFieldVariants, numberFieldVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { NumberField } from "./number-field";
import type { NumberFieldDecrement } from "./number-field-decrement";
import type { NumberFieldGroup } from "./number-field-group";
import type { NumberFieldIncrement } from "./number-field-increment";
import type { NumberFieldInput } from "./number-field-input";

export const useNumberField = (props: useNumberField.Props) => {
  const {
    formatOptions = { style: "decimal" },
    locale = navigator?.language ?? "en-US",
    minValue,
    maxValue,
    step,
    ...restProps
  } = props;
  const [value, setValue] = useState<string>("");
  const styles = numberFieldVariants();
  const inputRef = useRef<HTMLInputElement>(null);
  const parser = useMemo(
    () => new NumberParser(locale, formatOptions),
    [locale, formatOptions]
  );
  const formatter = useMemo(
    () => new Intl.NumberFormat(locale, formatOptions),
    [locale, formatOptions]
  );

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value) {
        const parsedValue = parser.parse(value);
        if (!isNaN(parsedValue)) {
          setValue(value);
        }
      } else {
        setValue("");
      }
    },
    [parser]
  );

  const handleInputOnBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const parsedValue = parser.parse(value);
      if (!isNaN(parsedValue)) {
        setValue(formatter.format(parsedValue));
      }
    },
    [formatter, parser]
  );

  const handleIncrement = useCallback(() => {
    const parsedValue = parser.parse(value);
    if (isNaN(parsedValue)) {
      setValue(formatter.format(1));
    } else {
      setValue(formatter.format(parsedValue + 1));
    }
  }, [formatter, parser, value]);

  const handleDecrement = useCallback(() => {
    const parsedValue = parser.parse(value);
    if (isNaN(parsedValue)) {
      setValue(formatter.format(-1));
    } else {
      setValue(formatter.format(parsedValue - 1));
    }
  }, [formatter, parser, value]);

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "ArrowUp") {
        handleIncrement();
        event.preventDefault();
      } else if (event.key === "ArrowDown") {
        handleDecrement();
        event.preventDefault();
      }
    },
    [handleDecrement, handleIncrement]
  );

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    const handler = (event: WheelEvent) => {
      if (
        document.activeElement !== el ||
        event.metaKey ||
        event.shiftKey ||
        event.ctrlKey ||
        event.altKey
      )
        return;

      event.preventDefault();
      if (event.deltaY > 0) {
        handleIncrement();
      } else {
        handleDecrement();
      }
    };

    el.addEventListener("wheel", handler, { passive: false });
    return () => {
      el.removeEventListener("wheel", handler);
    };
  }, [handleDecrement, handleIncrement]);

  const getRootProps: PropGetter<NumberField.Props> = useCallback(
    () => ({
      ...restProps,
      "data-slot": dataAttrDev("root"),
      className: styles.root({
        className: props.className,
      }),
    }),
    [restProps, styles]
  );

  const getInputProps: PropGetter<NumberFieldInput.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, {
        onChange: handleInputOnChange,
        onBlur: handleInputOnBlur,
        onKeyDown: handleInputKeyDown,
      }),
      ref: inputRef,
      value,
      "data-slot": dataAttrDev("input"),
      className: styles.input({
        className: props.className,
      }),
    }),
    [handleInputKeyDown, handleInputOnBlur, handleInputOnChange, styles, value]
  );

  const getIncrementProps: PropGetter<NumberFieldIncrement.Props> = useCallback(
    (props) => ({
      tabIndex: -1,
      size: "sm",
      radius: "none",
      "data-slot": dataAttrDev("increment"),
      ...mergeProps(props, {
        onClick: handleIncrement,
      }),
      className: styles.increment({
        className: props.className,
      }),
    }),
    [handleIncrement, styles]
  );

  const getDecrementProps: PropGetter<NumberFieldDecrement.Props> = useCallback(
    (props) => ({
      tabIndex: -1,
      size: "sm",
      radius: "none",
      "data-slot": dataAttrDev("decrement"),
      ...mergeProps(props, {
        onClick: handleDecrement,
      }),
      className: styles.decrement({
        className: props.className,
      }),
    }),
    [handleDecrement, styles]
  );

  const getGroupProps: PropGetter<NumberFieldGroup.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("group"),
      className: styles.group({
        className: props.className,
      }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getInputProps,
      getIncrementProps,
      getDecrementProps,
      getGroupProps,
    }),
    [
      getRootProps,
      getInputProps,
      getIncrementProps,
      getDecrementProps,
      getGroupProps,
    ]
  );
};

export namespace useNumberField {
  export interface Props extends UIProps<"div">, NumberFieldVariants {
    formatOptions?: Intl.NumberFormatOptions;
    locale?: string;
    minValue?: number;
    maxValue?: number;
    step?: number;
    value?: number;
    onValueChange?: (value: number) => void;
    defaultValue?: number;
    name?: string;
    form?: string;
    disabled?: boolean;
  }
}
