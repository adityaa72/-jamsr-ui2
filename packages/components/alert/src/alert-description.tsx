import { Text } from "@jamsrui/text";

import { useAlertContext } from "./alert-context";

export const AlertDescription = (props: AlertDescription.Props) => {
  const { getDescriptionProps } = useAlertContext();
  const { children, ...elementProps } = props;
  return (
    <Text render={<p />} {...getDescriptionProps(elementProps)}>
      {children}
    </Text>
  );
};

export namespace AlertDescription {
  export interface Props extends Text.Props {}
}
