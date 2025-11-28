import { Dialog as DialogRoot } from "./dialog";
import { DialogBody } from "./dialog-body";
import { DialogCloseButton } from "./dialog-close-button";
import { DialogCloseTrigger } from "./dialog-close-trigger";
import { DialogConfig } from "./dialog-config";
import {
  DialogContainer,
  DialogContainerWithContent,
} from "./dialog-container";
import { DialogContent } from "./dialog-content";
import { DialogFooter } from "./dialog-footer";
import { DialogHeader } from "./dialog-header";
import { DialogTrigger } from "./dialog-trigger";

export { DialogConfig, useDialogConfig } from "./dialog-config";
export {
  DialogBody,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
};

export const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Body: DialogBody,
  CloseTrigger: DialogCloseTrigger,
  CloseButton: DialogCloseButton,
  Config: DialogConfig,
  Container: DialogContainer,
  Content: DialogContainerWithContent,
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
  export interface Content extends DialogContent.Props {}
}
