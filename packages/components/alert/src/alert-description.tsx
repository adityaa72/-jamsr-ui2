import { Text } from "@jamsr-ui/text";
import { mergeProps } from "@jamsr-ui/utils";

import { useAlertContext } from "./alert-context";

export const AlertDescription = (props: AlertDescription.Props) => {
  const { getDescriptionProps, slotProps } = useAlertContext();
  const { children, ...elementProps } = mergeProps(
    slotProps?.description ?? {},
    props
  );
  return (
    <Text render={<p />} {...getDescriptionProps(elementProps)}>
      {children}
    </Text>
  );
};

export namespace AlertDescription {
  export interface Props extends Text.Props {}
}
