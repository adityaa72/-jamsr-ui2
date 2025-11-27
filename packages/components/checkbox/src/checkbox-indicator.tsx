"use client";

import { useCheckboxContext } from "./checkbox-context";
import { CheckboxIcon } from "./checkbox-icon";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxIndicator = (props: CheckboxIndicator.Props) => {
  const { getIndicatorProps, isChecked } = useCheckboxContext();
  const { children = <CheckboxIcon /> } = props;
  const indicator =
    typeof children === "function" ? children({ isChecked }) : children;
  return <div {...getIndicatorProps({})}>{indicator}</div>;
};

export namespace CheckboxIndicator {
  export interface Props extends Omit<UIProps<"div">, "children"> {
    children?:
      | React.ReactNode
      | ((state: { isChecked: boolean }) => React.ReactNode);
  }
}
