import { Drawer as DrawerRoot } from "./drawer";
import { DrawerBody } from "./drawer-body";
import { DrawerCloseButton } from "./drawer-close-button";
import { DrawerCloseTrigger } from "./drawer-close-trigger";
import { DrawerConfig, useDrawerConfig } from "./drawer-config";
import { DrawerContext, useDrawerContext } from "./drawer-context";
import { DrawerContent } from "./drawer-content";
import { DrawerFooter } from "./drawer-footer";
import { DrawerHeader } from "./drawer-header";
import { DrawerTrigger } from "./drawer-trigger";

export {
  DrawerBody,
  DrawerCloseButton,
  DrawerCloseTrigger,
  DrawerConfig,
  DrawerContext,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  useDrawerConfig,
  useDrawerContext,
};

export const Drawer = Object.assign(DrawerRoot, {
  Body: DrawerBody,
  CloseButton: DrawerCloseButton,
  CloseTrigger: DrawerCloseTrigger,
  Content: DrawerContent,
  Footer: DrawerFooter,
  Header: DrawerHeader,
  Trigger: DrawerTrigger,
});

export namespace Drawer {
  export interface Props extends DrawerRoot.Props {}
  export interface Config extends DrawerConfig.Props {}
  export interface Body extends DrawerBody.Props {}
  export interface CloseButton extends DrawerCloseButton.Props {}
  export interface CloseTrigger extends DrawerCloseTrigger.Props {}
  export interface Content extends DrawerContent.Props {}
  export interface Footer extends DrawerFooter.Props {}
  export interface Header extends DrawerHeader.Props {}
  export interface Trigger extends DrawerTrigger.Props {}
}
