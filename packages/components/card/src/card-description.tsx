import { Text } from "@jamsr-ui/text";
import { UIProps } from "@jamsr-ui/utils";
import { useCardContext } from "./card-context";

export const CardDescription = (props: CardDescription.Props) => {
  const { children, ...elementProps } = props;
  const { getDescriptionProps } = useCardContext();
  return <Text {...getDescriptionProps(elementProps)}>{children}</Text>;
};

export namespace CardDescription {
  export interface Props extends UIProps<"p"> {}
}
