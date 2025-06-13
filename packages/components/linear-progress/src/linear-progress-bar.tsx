import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const LinearProgressBar = (props: LinearProgressBar.Props) => {
  const renderElement = useRenderElement("div", { props });
  return renderElement;
};
export namespace LinearProgressBar {
  export interface Props extends UIProps<"div"> {}
}
