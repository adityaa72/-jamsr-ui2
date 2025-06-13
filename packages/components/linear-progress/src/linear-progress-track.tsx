import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const LinearProgressTrack = (props: LinearProgressTrack.Props) => {
  const renderElement = useRenderElement("div", { props });
  return renderElement;
};
export namespace LinearProgressTrack {
  export interface Props extends UIProps<"div"> {}
}
