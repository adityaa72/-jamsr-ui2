import { createConfigContext } from "@jamsr-ui/utils";

import type { Tabs } from "./tabs";

export const [TabsConfig, useTabsConfig] =
  createConfigContext<TabsConfig.Props>({
    displayName: "TabsConfig",
  });

export namespace TabsConfig {
  export interface Props extends Tabs.Props {}
}
