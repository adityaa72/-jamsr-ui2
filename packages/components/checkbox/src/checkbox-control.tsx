"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";
import { CheckboxIndicator } from "./checkbox-indicator";
import { CheckboxInput } from "./checkbox-input";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxControl = (props: CheckboxControl.Props) => {
  const { getControlProps } = useCheckboxContext();
  const { children = <CheckboxIndicator /> } = props;
  const renderElement = useRenderElement("div", {
    props: [
      getControlProps(props),
      {
        children: (
          <>
            <CheckboxInput />
            {children}
          </>
        ),
      },
    ],
  });
  return renderElement;
};

export namespace CheckboxControl {
  export interface Props extends UIProps<"div"> {}
}
