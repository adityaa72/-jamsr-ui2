import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useCardContext } from "./card-context";

import type { UIProps } from "@jamsr-ui/utils";

export const CardHeader = (props: CardHeader.Props) => {
  const {
    getHeaderContentProps,
    getHeaderProps,
    slotProps: ctxSlotProps,
  } = useCardContext();

  const { startContent, endContent, slotProps, children, ...elementProps } =
    mergeProps(ctxSlotProps?.header ?? {}, props);

  const composedChildren = (
    <>
      {startContent}
      <div
        {...getHeaderContentProps({
          ...mergeProps(
            ctxSlotProps?.headerContent ?? {},
            slotProps?.content ?? {}
          ),
        })}
      >
        {children}
      </div>
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
    slotProps?: {
      content?: UIProps<"div">;
    };
  }
}
