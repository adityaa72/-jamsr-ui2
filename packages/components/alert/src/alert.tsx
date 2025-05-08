import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";
import { AlertDescription } from "./alert-description";
import { AlertTitle } from "./alert-title";

export const Alert = (props: Alert.Props) => {
  const { slotProps:_slotProps, ...elementProps } = props;
  const renderElement = useRenderElement("div", {
    props: elementProps,
  });
  return renderElement;
};

export namespace Alert {
  export interface Props extends UIProps<"div"> {
    slotProps?: {
      title?: AlertTitle.Props;
      description?: AlertDescription.Props;
    };
  }
}
