import { useRenderElement } from "@jamsrui/hooks";
import { CloseFilledIcon } from "@jamsrui/icons";

import { useChipContext } from "./chip-context";

import type { UIProps } from "@jamsrui/utils";

export const ChipCloseButton = (props: ChipCloseButton.Props) => {
  const { getCloseButtonProps } = useChipContext();

  const children = <CloseFilledIcon className="size-4" />;
  const renderElement = useRenderElement("button", {
    props: [getCloseButtonProps(props), { children }],
  });
  return renderElement;
};

export namespace ChipCloseButton {
  export interface Props extends UIProps<"button"> {}
}
