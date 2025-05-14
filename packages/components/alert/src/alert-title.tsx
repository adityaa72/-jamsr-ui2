import { Text } from "@jamsr-ui/text";
import { mergeProps } from "@jamsr-ui/utils";

import { useAlertContext } from "./alert-context";

export const AlertTitle = (props: AlertTitle.Props) => {
  const { slotProps, getTitleProps } = useAlertContext();
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

export namespace AlertTitle {
  export interface Props extends Text.Props {}
}
