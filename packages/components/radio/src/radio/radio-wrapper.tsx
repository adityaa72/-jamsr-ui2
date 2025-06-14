import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const RadioWrapper = (props: RadioWrapper.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace RadioWrapper {
  export interface Props extends UIProps<"div"> {}
}
