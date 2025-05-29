import { useRenderElement } from "@jamsr-ui/hooks";

import { useChipContext } from "./chip-context";

import type { UIProps } from "@jamsr-ui/utils";

export const ChipDot = (props: ChipDot.Props) => {
  const { getDotProps } = useChipContext();
  const renderElement = useRenderElement("div", {
    props: [getDotProps(props)],
  });
  return renderElement;
};

export namespace ChipDot {
  export interface Props extends UIProps<"div"> {}
}
