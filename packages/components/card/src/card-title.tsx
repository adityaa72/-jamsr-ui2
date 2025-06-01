import { Text } from "@jamsrui/react";
import { mergeProps } from "@jamsrui/utils";

import { useCardContext } from "./card-context";

export const CardTitle = (props: CardTitle.Props) => {
  const { getTitleProps, slotProps } = useCardContext();
  const { children, ...elementProps } = mergeProps(
    slotProps?.title ?? {},
    props
  );

  return (
    <Text render={<h3 />} {...getTitleProps(elementProps)}>
      {children}
    </Text>
  );
};

export namespace CardTitle {
  export interface Props extends Text.Props {}
}
