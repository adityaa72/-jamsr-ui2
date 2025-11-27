"use client";

import { CheckboxIcon } from "./checkbox-icon";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxIndicator = (props: CheckboxIndicator.Props) => {
  const { children = <CheckboxIcon /> } = props;
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-primary-foreground"
      data-slot="icon"
    >
      {children}
    </div>
  );
};

export namespace CheckboxIndicator {
  export interface Props extends UIProps<"div"> {}
}
