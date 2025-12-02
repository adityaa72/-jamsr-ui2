"use client";

import { useCallback, useMemo, useState } from "react";

import { dataAttrDev, mergeProps } from "@jamsrui/utils";

import type { PropGetter } from "@jamsrui/utils";

import type { NumberField } from "./number-field";
import type { NumberFieldDecrementButton } from "./number-field-decrement-button";
import type { NumberFieldGroup } from "./number-field-group";
import type { NumberFieldIncrementButton } from "./number-field-increment-button";
import type { NumberFieldInput } from "./number-field-input";

export const useNumberField = (props: useNumberField.Props) => {
  const [value, setValue] = useState<string>("");
  console.log({ value });

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      // const parsedValue = Number(value);
      // if (!isNaN(parsedValue)) {
      //   setValue(parsedValue.toString());
      // }
      setValue(value);
    },
    []
  );

  const handleInputOnBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const parsedValue = Number(value);
      if (!isNaN(parsedValue)) {
        const formattedValue = new Intl.NumberFormat("en-US").format(
          parsedValue
        );
        setValue(formattedValue);
      } else {
        setValue("");
      }
    },
    []
  );

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
      }),
      value,
      "data-slot": dataAttrDev("input"),
    }),
    [handleInputOnBlur, handleInputOnChange, value]
  );

  const getIncrementButtonProps: PropGetter<NumberFieldIncrementButton.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("increment-button"),
      }),
      []
    );

  const getDecrementButtonProps: PropGetter<NumberFieldDecrementButton.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("decrement-button"),
      }),
      []
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
      getIncrementButtonProps,
      getDecrementButtonProps,
      getGroupProps,
    }),
    [
      getRootProps,
      getInputProps,
      getIncrementButtonProps,
      getDecrementButtonProps,
      getGroupProps,
    ]
  );
};
export namespace useNumberField {
  export interface Props {}
}
