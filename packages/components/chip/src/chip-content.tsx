import { useRenderElement } from "@jamsr-ui/hooks";

import { useChipContext } from "./chip-context";
import { ChipDot } from "./chip-dot";

import type { UIProps } from "@jamsr-ui/utils";

export const ChipContent = (props: ChipContent.Props) => {
  const { children } = props;
  const { getContentProps, startContent, endContent, isDotVariant } =
    useChipContext();

  const composedChildren = (
    <>
      {startContent}
      {!!isDotVariant && <ChipDot />}
      {children}
      {endContent}
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getContentProps(props), { children: composedChildren }],
  });
  return renderElement;
};

export namespace ChipContent {
  export interface Props extends UIProps<"div"> {}
}
