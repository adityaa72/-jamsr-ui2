import { createConfigContext } from "@jamsr-ui/utils";

import type { Sidebar } from "./sidebar";

export const [SidebarConfig, useSidebarConfig] =
  createConfigContext<SidebarConfig.Props>({
    displayName: "SidebarConfigContext",
  });

export namespace SidebarConfig {
  export interface Props extends Sidebar.Props {}
}
