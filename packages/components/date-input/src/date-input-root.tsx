import { useRenderElement } from "@jamsrui/hooks";

import { useDateInputContext } from "./date-input-context";

import type { UIProps } from "@jamsrui/utils";

export const DateInputRoot = (props: DateInputRoot.Props) => {
  const { getRootProps } = useDateInputContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return renderElement;
};

export namespace DateInputRoot {
  export interface Props extends UIProps<"div"> {}
}
