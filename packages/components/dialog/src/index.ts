import { Dialog as DialogRoot } from "./dialog";
import { DialogBody } from "./dialog-body";
import { DialogCloseButton } from "./dialog-close-button";
import { DialogCloseTrigger } from "./dialog-close-trigger";
import { DialogConfig, useDialogConfig } from "./dialog-config";
import {
  DialogContainer,
  DialogContainerWithContent,
} from "./dialog-container";
import { DialogContent } from "./dialog-content";
import { DialogContext, useDialogContext } from "./dialog-context";
import { DialogFooter } from "./dialog-footer";
import { DialogHeader } from "./dialog-header";
import { DialogTrigger } from "./dialog-trigger";

export {
  DialogBody,
  DialogCloseButton,
  DialogCloseTrigger,
  DialogConfig,
  DialogContainer,
  DialogContainerWithContent,
  DialogContent,
  DialogContext,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  useDialogConfig,
  useDialogContext,
};

export const Dialog = Object.assign(DialogRoot, {
  Body: DialogBody,
  CloseTrigger: DialogCloseTrigger,
  CloseButton: DialogCloseButton,
  Container: DialogContainer,
  Content: DialogContainerWithContent,
  ContentRoot: DialogContent,
  Footer: DialogFooter,
  Header: DialogHeader,
  Trigger: DialogTrigger,
});

export namespace Dialog {
  export interface Props extends DialogRoot.Props {}
  export interface Body extends DialogBody.Props {}
  export interface Footer extends DialogFooter.Props {}
  export interface Header extends DialogHeader.Props {}
  export interface Trigger extends DialogTrigger.Props {}
  export interface CloseTrigger extends DialogCloseTrigger.Props {}
  export interface Container extends DialogContainer.Props {}
  export interface Content extends DialogContainerWithContent.Props {}
  export interface Config extends DialogConfig.Props {}
}
