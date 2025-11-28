"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";
import { SelectIndicator } from "./select-indicator";
import { SelectValue } from "./select-value";

import type { UIProps } from "@jamsrui/utils";

export const SelectTrigger = (props: SelectTrigger.Props) => {
  const {
    children = (
      <>
        <SelectValue />
        <SelectIndicator />
      </>
    ),
    ...restProps
  } = props;
  const { getTriggerProps } = useSelectContext();
  const renderElement = useRenderElement("button", {
    props: [getTriggerProps(restProps), { children }],
  });
  return renderElement;
};

export namespace SelectTrigger {
  export interface Props extends UIProps<"button"> {}
}
