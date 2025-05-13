import { Text } from "@jamsr-ui/text";

import { useCardContext } from "./card-context";

export const CardTitle = (props: CardTitle.Props) => {
  const { children, ...elementProps } = props;
  const { getTitleProps } = useCardContext();
  return (
    <Text render={<h3 />} {...getTitleProps(elementProps)}>
      {children}
    </Text>
  );
};

export namespace CardTitle {
  export interface Props extends Text.Props {}
}
