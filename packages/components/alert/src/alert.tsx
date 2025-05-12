import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps, UIProps } from "@jamsr-ui/utils";
import { useAlertConfig } from "./alert-config";
import { AlertContextProvider } from "./alert-context";
import { AlertDescription } from "./alert-description";
import { AlertTitle } from "./alert-title";
import { InfoIcon } from "./icons";

export const Alert = (props: Alert.Props) => {
  const config = useAlertConfig();
  const mergedProps = mergeProps(config, props);
  const { slotProps, children, ...elementProps } = mergedProps;

  const content = (
    <>
      <InfoIcon />
      <div>{children}</div>
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [elementProps, { children: content }],
  });
  return (
    <AlertContextProvider slotProps={slotProps}>
      {renderElement}
    </AlertContextProvider>
  );
};

export namespace Alert {
  export interface Props extends UIProps<"div"> {
    slotProps?: {
      title?: AlertTitle.Props;
      description?: AlertDescription.Props;
    };
  }
}
