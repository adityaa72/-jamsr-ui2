import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";
import { useChipContext } from "./chip-context";

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
