import { Text } from "@jamsr-ui/text";

import { useCardContext } from "./card-context";

import type { UIProps } from "@jamsr-ui/utils";

export const CardDescription = (props: CardDescription.Props) => {
  const { children, ...elementProps } = props;
  const { getDescriptionProps } = useCardContext();
  return <Text {...getDescriptionProps(elementProps)}>{children}</Text>;
};

export namespace CardDescription {
  export interface Props extends UIProps<"p"> {}
}
