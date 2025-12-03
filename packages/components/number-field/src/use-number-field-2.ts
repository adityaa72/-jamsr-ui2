"use client";

import { useCallback, useMemo, useState, useEffect, useRef } from "react";
import { dataAttrDev, mergeProps } from "@jamsrui/utils";
import type { PropGetter } from "@jamsrui/utils";
import type { NumberField } from "./number-field";
import type { NumberFieldDecrement } from "./number-field-decrement";
import type { NumberFieldGroup } from "./number-field-group";
import type { NumberFieldIncrement } from "./number-field-increment";
import type { NumberFieldInput } from "./number-field-input";

// Get browser locale
const getBrowserLocale = (): string => {
  if (typeof window !== "undefined") {
    return (
      navigator.language ||
      (navigator as any).userLanguage ||
      new Intl.NumberFormat().resolvedOptions().locale ||
      "en-US"
    );
  }
  return "en-US";
};

export const useNumberField = (props: useNumberField.Props) => {
  const {
    defaultValue,
    minValue = -Infinity,
    maxValue = Infinity,
    step = 1,
    formatOptions,
    onChange,
    allowMouseWheel = true,
    locale,
  } = props;

  const [numberValue, setNumberValue] = useState<number>(defaultValue ?? 0);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Use provided locale or browser locale
  const resolvedLocale = useMemo(() => locale || getBrowserLocale(), [locale]);

  // Create formatter based on formatOptions and locale
  const formatter = useMemo(() => {
    return new Intl.NumberFormat(resolvedLocale, formatOptions);
  }, [resolvedLocale, formatOptions]);

  // Get locale-specific separators for parsing
  const { groupSeparator, decimalSeparator } = useMemo(() => {
    const parts = new Intl.NumberFormat(resolvedLocale).formatToParts(1111.1);
    return {
      groupSeparator: parts.find((p) => p.type === "group")?.value || ",",
      decimalSeparator: parts.find((p) => p.type === "decimal")?.value || ".",
    };
  }, [resolvedLocale]);

  // Parse formatted string back to number
  const parseValue = useCallback(
    (value: string): number | null => {
      if (!value || value.trim() === "") return null;

      let cleanValue = value;

      // Handle accounting format: (€1.00) -> -1.00
      // Replace parentheses with minus sign
      if (/^\(.*\)$/.test(cleanValue.trim())) {
        cleanValue = cleanValue.replace(/^\(/, "-").replace(/\)$/, "");
      }

      // Remove currency symbols, unit symbols, percent signs, and group separators
      cleanValue = cleanValue
        .replace(new RegExp(`\\${groupSeparator}`, "g"), "")
        .replace(/[^\d.\-,]/g, "");

      // Replace locale decimal separator with standard dot
      if (decimalSeparator !== ".") {
        cleanValue = cleanValue.replace(decimalSeparator, ".");
      }

      // Remove all commas that might be left
      cleanValue = cleanValue.replace(/,/g, "");

      const parsed = parseFloat(cleanValue);
      if (isNaN(parsed)) return null;

      // Handle percentage: user types "50" which should be 0.5 (50%)
      if (formatOptions?.style === "percent") {
        if (parsed > 1 || parsed < -1) {
          return parsed / 100;
        }
      }

      return parsed;
    },
    [formatOptions, groupSeparator, decimalSeparator]
  );

  // Clamp value within min/max bounds
  const clampValue = useCallback(
    (value: number): number => {
      return Math.min(Math.max(value, minValue), maxValue);
    },
    [minValue, maxValue]
  );

  // Update formatted display value when number changes
  useEffect(() => {
    setInputValue(formatter.format(numberValue));
  }, [numberValue, formatter]);

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
    },
    []
  );

  const handleInputOnBlur = useCallback(() => {
    const parsed = parseValue(inputValue);

    if (parsed !== null) {
      const clamped = clampValue(parsed);
      setNumberValue(clamped);
      setInputValue(formatter.format(clamped));
      onChange?.(clamped);
    } else {
      // Reset to last valid value
      setInputValue(formatter.format(numberValue));
    }
  }, [inputValue, parseValue, clampValue, formatter, numberValue, onChange]);

  const handleIncrement = useCallback(() => {
    const newValue = clampValue(numberValue + step);
    setNumberValue(newValue);
    setInputValue(formatter.format(newValue));
    onChange?.(newValue);
  }, [numberValue, step, clampValue, formatter, onChange]);

  const handleDecrement = useCallback(() => {
    const newValue = clampValue(numberValue - step);
    setNumberValue(newValue);
    setInputValue(formatter.format(newValue));
    onChange?.(newValue);
  }, [numberValue, step, clampValue, formatter, onChange]);

  // Keyboard arrow key support
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        handleIncrement();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        handleDecrement();
      }
    },
    [handleIncrement, handleDecrement]
  );

  // Mouse wheel support with proper preventDefault
  useEffect(() => {
    const input = inputRef.current;
    if (!input || !allowMouseWheel) return;

    const handleWheel = (event: WheelEvent) => {
      // Only handle wheel when input is focused
      if (document.activeElement !== input) return;

      event.preventDefault();

      // Handle Mac trackpad and Windows mouse
      // deltaY > 0 means scroll down, < 0 means scroll up
      if (event.deltaY < 0) {
        handleIncrement();
      } else if (event.deltaY > 0) {
        handleDecrement();
      }
    };

    // Add non-passive listener to allow preventDefault
    input.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      input.removeEventListener("wheel", handleWheel);
    };
  }, [allowMouseWheel, handleIncrement, handleDecrement]);

  const getRootProps: PropGetter<NumberField.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("root"),
    }),
    []
  );

  const getInputProps: PropGetter<NumberFieldInput.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, {
        onChange: handleInputOnChange,
        onBlur: handleInputOnBlur,
        onKeyDown: handleKeyDown,
        ref: (node: HTMLInputElement | null) => {
          inputRef.current = node;
          // Handle forwarded refs
          if (typeof props?.ref === "function") {
            props.ref(node);
          } else if (props?.ref) {
            (props.ref as any).current = node;
          }
        },
      }),
      value: inputValue,
      "data-slot": dataAttrDev("input"),
    }),
    [handleInputOnChange, handleInputOnBlur, handleKeyDown, inputValue]
  );

  const getIncrementProps: PropGetter<NumberFieldIncrement.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, {
        onClick: handleIncrement,
      }),
      disabled: numberValue >= maxValue,
      "data-slot": dataAttrDev("increment"),
    }),
    [handleIncrement, numberValue, maxValue]
  );

  const getDecrementProps: PropGetter<NumberFieldDecrement.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, {
        onClick: handleDecrement,
      }),
      disabled: numberValue <= minValue,
      "data-slot": dataAttrDev("decrement"),
    }),
    [handleDecrement, numberValue, minValue]
  );

  const getGroupProps: PropGetter<NumberFieldGroup.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("group"),
    }),
    []
  );

  return useMemo(
    () => ({
      getRootProps,
      getInputProps,
      getIncrementProps,
      getDecrementProps,
      getGroupProps,
      value: numberValue,
    }),
    [
      getRootProps,
      getInputProps,
      getIncrementProps,
      getDecrementProps,
      getGroupProps,
      numberValue,
    ]
  );
};

export namespace useNumberField {
  export interface Props {
    defaultValue?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    formatOptions?: Intl.NumberFormatOptions;
    onChange?: (value: number) => void;
    allowMouseWheel?: boolean;
    locale?: string; // e.g., "en-US", "de-DE", "ja-JP"
  }
}
