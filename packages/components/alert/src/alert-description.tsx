import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps, UIProps } from "@jamsr-ui/utils";
import { useAlertConfig } from "./alert-config";

export const AlertDescription = (props: AlertDescription.Props) => {
  const { slotProps } = useAlertConfig();
  const mergedProps = mergeProps(slotProps?.description ?? {}, props);
  const renderElement = useRenderElement("div", {
    props: mergedProps,
  });
  return renderElement;
};

export namespace AlertDescription {
  export interface Props extends UIProps<"div"> {}
}
