"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useRadioContext } from "./radio-context";

import type { UIProps } from "@jamsrui/utils";
import { RadioIndicator } from "./radio-indicator";
import { RadioInput } from "./radio-input";

export const RadioControl = (props: RadioControl.Props) => {
  const { children = <RadioIndicator />, ...restProps } = props;
  const { getControlProps } = useRadioContext();
  const renderElement = useRenderElement("div", {
    props: [
      getControlProps(restProps),
      {
        children: (
          <>
            <RadioInput />
            {children}
          </>
        ),
      },
    ],
  });
  return renderElement;
};

export namespace RadioControl {
  export interface Props extends UIProps<"div"> {}
}
