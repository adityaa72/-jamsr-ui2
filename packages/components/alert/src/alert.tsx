import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useAlertConfig } from "./alert-config";
import { AlertContent } from "./alert-content";
import { AlertContextProvider } from "./alert-context";
import { AlertIcon } from "./alert-icon";
import { useAlert } from "./use-alert";

import type { UIProps } from "@jamsrui/utils";

export const Alert = (props: Alert.Props) => {
  const { children } = props;

  const config = useAlertConfig();
  const mergedProps = mergeConfigProps(config,config, props);
  const ctx = useAlert(mergedProps);
  const { endContent, getRootProps } = ctx;

  const composedChildren = (
    <>
      <AlertIcon />
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
