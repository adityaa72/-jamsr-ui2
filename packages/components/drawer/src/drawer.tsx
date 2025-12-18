"use client";
import { mergeConfigProps } from "@jamsrui/utils";

import { useDrawerConfig } from "./drawer-config";
import { DrawerContext } from "./drawer-context";
import { drawerVariants } from "./styles";
import { useDrawer } from "./use-drawer";

export const Drawer = (props: Drawer.Props) => {
  const { children } = props;
  const config = useDrawerConfig();
  const mergedProps = mergeConfigProps(
    drawerVariants.defaultVariants,
    config,
    props
  );
  const ctx = useDrawer(mergedProps);
  return <DrawerContext value={ctx}>{children}</DrawerContext>;
};

export namespace Drawer {
  export interface Props extends useDrawer.Props {
    children: React.ReactNode;
  }
}
