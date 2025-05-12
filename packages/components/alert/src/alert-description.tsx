import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps, UIProps } from "@jamsr-ui/utils";
import { useAlertConfig } from "./alert-config";
import { useAlertContext } from "./alert-context";

export const AlertDescription = (props: AlertDescription.Props) => {
  const config = useAlertConfig();
  const ctx = useAlertContext();
  const mergedProps = mergeProps(
    config.slotProps?.description,
    ctx.slotProps?.description,
    props
  );
  const renderElement = useRenderElement("div", {
    props: mergedProps,
  });
  return renderElement;
};

export namespace AlertDescription {
  export interface Props extends UIProps<"div"> {}
}
