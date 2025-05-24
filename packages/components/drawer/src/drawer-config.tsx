import { createConfigContext } from "@jamsr-ui/utils";

import type { Drawer } from "./drawer";

export const [DrawerConfig, useDrawerConfig] =
  createConfigContext<DrawerConfig.Props>({
    displayName: "DrawerConfig",
  });

export namespace DrawerConfig {
  export interface Props extends Drawer.Props {}
}
