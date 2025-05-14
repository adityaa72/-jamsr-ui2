import { Text } from "@jamsr-ui/text";

import { useCardContext } from "./card-context";

export const CardDescription = (props: CardDescription.Props) => {
  const { children, ...elementProps } = props;
  const { getDescriptionProps } = useCardContext();
  return (
    <Text render={<p />} {...getDescriptionProps(elementProps)}>
      {children}
    </Text>
  );
};

export namespace CardDescription {
  export interface Props extends Text.Props {}
}
