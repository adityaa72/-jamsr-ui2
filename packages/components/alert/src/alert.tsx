import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useAlertConfig } from "./alert-config";
import { AlertContent } from "./alert-content";
import { AlertContextProvider } from "./alert-context";
import { useAlert } from "./use-alert";

import type { UIProps } from "@jamsr-ui/utils";

export const Alert = (props: Alert.Props) => {
  const config = useAlertConfig();
  const mergedProps = mergeProps(config ?? {}, props);
  const { children } = mergedProps;
  const ctx = useAlert(mergedProps);
  const { endContent, getRootProps, icon } = ctx;

  const composedChildren = (
    <>
      {icon}
      <AlertContent>{children}</AlertContent>
      {endContent}
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return <AlertContextProvider ctx={ctx}>{renderElement}</AlertContextProvider>;
};

export namespace Alert {
  export interface Props extends UIProps<"div">, useAlert.Props {}
}
