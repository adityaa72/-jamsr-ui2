import { mergeProps } from "@jamsr-ui/utils";

import { useDrawerConfig } from "./drawer-config";
import { DrawerContext } from "./drawer-context";
import { useDrawer } from "./use-drawer";

export const Drawer = (props: Drawer.Props) => {
  const { children } = props;
  const config = useDrawerConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useDrawer(mergedProps);
  return <DrawerContext value={ctx}>{children}</DrawerContext>;
};

export namespace Drawer {
  export interface Props extends useDrawer.Props {
    children: React.ReactNode;
  }
}
