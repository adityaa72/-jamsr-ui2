"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useAlertConfig } from "./alert-config";
import { AlertContextProvider } from "./alert-context";
import { useAlert } from "./use-alert";

import type { UIProps } from "@jamsrui/utils";

export const Alert = (props: Alert.Props) => {
  const config = useAlertConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useAlert(mergedProps);
  const { getRootProps } = ctx;

  const renderElement = useRenderElement("div", {
    props: [getRootProps({})],
  });
  return <AlertContextProvider ctx={ctx}>{renderElement}</AlertContextProvider>;
};

export namespace Alert {
  export interface Props extends UIProps<"div">, useAlert.Props {}
}
