import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const CircularProgress = (props: CircularProgress.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace CircularProgress {
  export interface Props extends UIProps<"div"> {}
}
