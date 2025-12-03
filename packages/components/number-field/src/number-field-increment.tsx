"use client";

import { IconButton } from "@jamsrui/icon-button";
import { PlusIcon } from "./icons";
import { useNumberFieldContext } from "./number-field-context";

export const NumberFieldIncrement = (props: NumberFieldIncrement.Props) => {
  const { children = <PlusIcon className="size-4" />, ...restProps } = props;
  const { getIncrementProps } = useNumberFieldContext();
  return (
    <IconButton label="Increment" {...getIncrementProps(restProps)}>
      {children}
    </IconButton>
  );
};

export namespace NumberFieldIncrement {
  export interface Props extends Partial<IconButton.Props> {}
}
