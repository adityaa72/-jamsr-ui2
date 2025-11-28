import { useRenderElement } from "@jamsrui/hooks";

import { useChipContext } from "./chip-context";

import type { UIProps } from "@jamsrui/utils";


export const ChipRoot = (props: ChipRoot.Props) => {
  const { getRootProps } = useChipContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return renderElement;
};

export namespace ChipRoot {
  export interface Props extends UIProps<"div"> {}
}
