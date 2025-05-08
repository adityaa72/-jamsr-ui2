import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps, UIProps } from "@jamsr-ui/utils";
import { useAlertConfig } from "./alert-config";

export const AlertTitle = (props: AlertTitle.Props) => {
  const { slotProps } = useAlertConfig();
  const mergedProps = mergeProps(slotProps?.title, props);
  const renderElement = useRenderElement("h3", {
    props: mergedProps,
  });
  return renderElement;
};

export namespace AlertTitle {
  export interface Props extends UIProps<"h3"> {}
}
