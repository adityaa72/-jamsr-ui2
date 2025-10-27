import { useRenderElement } from "@jamsrui/hooks";

import { useRadioContext } from "./radio-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioContent = (props: RadioContent.Props) => {
  const { getContentProps } = useRadioContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace RadioContent {
  export interface Props extends UIProps<"div"> {}
}
