"use client";

import { IconButton } from "@jamsrui/icon-button";
import { MinusIcon } from "./icons";
import { useNumberFieldContext } from "./number-field-context";

export const NumberFieldDecrement = (props: NumberFieldDecrement.Props) => {
  const { children = <MinusIcon className="size-4" />, ...restProps } = props;
  const { getDecrementProps } = useNumberFieldContext();
  return (
    <IconButton label="Decrement" {...getDecrementProps(restProps)}>
      {children}
    </IconButton>
  );
};

export namespace NumberFieldDecrement {
  export interface Props extends Partial<IconButton.Props> {}
}
