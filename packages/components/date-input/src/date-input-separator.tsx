import { useRenderElement } from "@jamsrui/hooks";

import { useDateInputContext } from "./date-input-context";

import type { UIProps } from "@jamsrui/utils";

export const DateInputSeparator = (props: DateInputSeparator.Props) => {
  const { getSeparatorProps } = useDateInputContext();
  const renderElement = useRenderElement("span", {
    props: [getSeparatorProps(props), { children: "/" }],
  });
  return renderElement;
};

export namespace DateInputSeparator {
  export interface Props extends UIProps<"span"> {}
}
