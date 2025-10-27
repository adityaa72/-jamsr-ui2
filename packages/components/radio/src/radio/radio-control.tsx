import { useRenderElement } from "@jamsrui/hooks";

import { useRadioContext } from "./radio-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioControl = (props: RadioControl.Props) => {
  const { getControlProps } = useRadioContext();
  const renderElement = useRenderElement("div", {
    props: [getControlProps(props)],
  });
  return renderElement;
};

export namespace RadioControl {
  export interface Props extends UIProps<"div"> {}
}
