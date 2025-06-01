import { Text } from "@jamsrui/text";

import { useAlertContext } from "./alert-context";

export const AlertTitle = (props: AlertTitle.Props) => {
  const { getTitleProps } = useAlertContext();
  const { children, ...elementProps } = props;
  return (
    <Text render={<h3 />} {...getTitleProps(elementProps)}>
      {children}
    </Text>
  );
};

export namespace AlertTitle {
  export interface Props extends Text.Props {}
}
