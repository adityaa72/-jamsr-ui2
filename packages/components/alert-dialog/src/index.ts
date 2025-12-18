import { AlertDialog as AlertDialogRoot } from "./alert-dialog";
import { AlertDialogAction } from "./alert-dialog-action";
import { AlertDialogBody } from "./alert-dialog-body";
import { AlertDialogCancel } from "./alert-dialog-cancel";
import { AlertDialogConfig, useAlertDialogConfig } from "./alert-dialog-config";
import { AlertDialogContainer } from "./alert-dialog-container";
import { AlertDialogContent } from "./alert-dialog-content";
import { AlertDialogContentInner } from "./alert-dialog-content-inner";
import {
  AlertDialogContext,
  useAlertDialogContext,
} from "./alert-dialog-context";
import { AlertDialogDescription } from "./alert-dialog-description";
import { AlertDialogFooter } from "./alert-dialog-footer";
import { AlertDialogTitle } from "./alert-dialog-title";
import { AlertDialogTrigger } from "./alert-dialog-trigger";
import {
  AlertDialogSlots,
  AlertDialogVariants,
  alertDialogVariant,
} from "./styles";
import { useAlertDialog } from "./use-alert-dialog";

export {
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogConfig,
  AlertDialogContainer,
  AlertDialogContent,
  AlertDialogContentInner,
  AlertDialogContext,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
  alertDialogVariant,
  useAlertDialog,
  useAlertDialogConfig,
  useAlertDialogContext,
  type AlertDialogSlots,
  type AlertDialogVariants,
};

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Body: AlertDialogBody,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Container: AlertDialogContainer,
  ContentInner: AlertDialogContentInner,
  Cancel: AlertDialogCancel,
  Action: AlertDialogAction,
});

export namespace AlertDialog {
  export interface Props extends AlertDialogRoot.Props {}
  export interface Config extends AlertDialogConfig.Props {}
  export interface Trigger extends AlertDialogTrigger.Props {}
  export interface Content extends AlertDialogContent.Props {}
  export interface Body extends AlertDialogBody.Props {}
  export interface Footer extends AlertDialogFooter.Props {}
  export interface Title extends AlertDialogTitle.Props {}
  export interface Description extends AlertDialogDescription.Props {}
  export interface Container extends AlertDialogContainer.Props {}
  export interface ContentInner extends AlertDialogContentInner.Props {}
  export interface Cancel extends AlertDialogCancel.Props {}
  export interface Action extends AlertDialogAction.Props {}
}
