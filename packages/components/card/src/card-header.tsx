import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useCardContext } from "./card-context";
import { CardHeaderContent } from "./card-header-content";

import type { UIProps } from "@jamsr-ui/utils";

export const CardHeader = (props: CardHeader.Props) => {
  const { getHeaderProps, slotProps } = useCardContext();
  const { startContent, endContent, children, ...elementProps } = mergeProps(
    slotProps?.header ?? {},
    props
  );

  const composedChildren = (
    <>
      {startContent}
      <CardHeaderContent>{children}</CardHeaderContent>
      {endContent}
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getHeaderProps(elementProps), { children: composedChildren }],
  });
  return renderElement;
};

export namespace CardHeader {
  export interface Props extends UIProps<"div"> {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  }
}
