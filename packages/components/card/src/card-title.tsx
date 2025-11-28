"use client";

import { Text } from "@jamsrui/text";

import { useCardContext } from "./card-context";

export const CardTitle = (props: CardTitle.Props) => {
  const { children } = props;
  const { getTitleProps } = useCardContext();
  return (
    <Text render={<h3 />} {...getTitleProps(props)}>
      {children}
    </Text>
  );
};

export namespace CardTitle {
  export interface Props extends Text.Props {}
}
