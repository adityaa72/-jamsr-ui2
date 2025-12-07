import { Alert as AlertRoot } from "./alert";
import { AlertConfig, useAlertConfig } from "./alert-config";
import { AlertContextProvider, useAlertContext } from "./alert-context";
import { AlertContent } from "./alert-content";
import { AlertDescription } from "./alert-description";
import { AlertIcon } from "./alert-icon";
import { AlertTitle } from "./alert-title";
import { AlertSlots, AlertVariants, alertStyles } from "./styles";
import { useAlert } from "./use-alert";

export {
  AlertConfig,
  AlertContent,
  AlertContextProvider,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  alertStyles,
  useAlert,
  useAlertConfig,
  useAlertContext,
  type AlertSlots,
  type AlertVariants,
};

export const Alert = Object.assign(AlertRoot, {
  Title: AlertTitle,
  Description: AlertDescription,
  Content: AlertContent,
  Icon: AlertIcon,
});

export namespace Alert {
  export interface Props extends AlertRoot.Props {}
  export interface Config extends AlertConfig.Props {}
  export interface Title extends AlertTitle.Props {}
  export interface Description extends AlertDescription.Props {}
  export interface Content extends AlertContent.Props {}
  export interface Icon extends AlertIcon.Props {}
}
