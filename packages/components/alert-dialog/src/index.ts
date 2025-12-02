import { AlertDialog as AlertDialogRoot } from "./alert-dialog";
import { AlertDialogBody } from "./alert-dialog-body";
import { AlertDialogContainer } from "./alert-dialog-container";
import { AlertDialogContent } from "./alert-dialog-content";
import { AlertDialogContentInner } from "./alert-dialog-content-inner";
import { AlertDialogDescription } from "./alert-dialog-description";
import { AlertDialogFooter } from "./alert-dialog-footer";
import { AlertDialogTitle } from "./alert-dialog-title";
import { AlertDialogTrigger } from "./alert-dialog-trigger";
import { AlertDialogTriggerClose } from "./alert-dialog-trigger-close";
export { AlertDialogConfig, useAlertDialogConfig } from "./alert-dialog-config";

export {
  AlertDialogBody,
  AlertDialogContainer,
  AlertDialogContent,
  AlertDialogContentInner,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogTriggerClose,
};

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Body: AlertDialogBody,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Container: AlertDialogContainer,
  ContentInner: AlertDialogContentInner,
  TriggerClose: AlertDialogTriggerClose,
});

export namespace AlertDialog {
  export interface Props extends AlertDialogRoot.Props {}
  export interface Trigger extends AlertDialogTrigger.Props {}
  export interface Content extends AlertDialogContent.Props {}
  export interface Body extends AlertDialogBody.Props {}
  export interface Footer extends AlertDialogFooter.Props {}
  export interface Title extends AlertDialogTitle.Props {}
  export interface Description extends AlertDialogDescription.Props {}
  export interface Container extends AlertDialogContainer.Props {}
  export interface ContentInner extends AlertDialogContentInner.Props {}
}
