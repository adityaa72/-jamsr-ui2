import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const RadioGroupHelperText = (props: RadioGroupHelperText.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace RadioGroupHelperText {
  export interface Props extends UIProps<"div"> {}
}
