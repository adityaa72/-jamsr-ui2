import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";
import { useCardContext } from "./card-context";

export const CardHeader = (props: CardHeader.Props) => {
  const { getHeaderContentProps, getHeaderProps } = useCardContext();
  const { startContent, endContent, children, ...elementProps } = props;

  const composedChildren = (
    <>
      {startContent}
      <div {...getHeaderContentProps(elementProps)}>{children}</div>
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
