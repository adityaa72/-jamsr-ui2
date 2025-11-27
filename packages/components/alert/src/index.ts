export { AlertConfig, useAlertConfig } from "./alert-config";
export { AlertDescription } from "./alert-description";
export { AlertTitle } from "./alert-title";
export { alertStyles } from "./styles";
export { useAlert } from "./use-alert";

import { Alert as AlertRoot } from "./alert";
import { AlertContent } from "./alert-content";
import { AlertDescription } from "./alert-description";
import { AlertIcon } from "./alert-icon";
import { AlertTitle } from "./alert-title";

export type AlertProps = AlertRoot.Props;

export const Alert = Object.assign(AlertRoot, {
  Root: AlertRoot,
  Title: AlertTitle,
  Description: AlertDescription,
  Content: AlertContent,
  Icon: AlertIcon,
});
