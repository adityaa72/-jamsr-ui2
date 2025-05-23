import { createConfigContext } from "@jamsr-ui/utils";

import type { Collapsible } from "./collapsible";

export const [CollapsibleConfig, useCollapsibleConfig] =
  createConfigContext<CollapsibleConfig.Props>({
    displayName: "CollapsibleConfig",
  });

export namespace CollapsibleConfig {
  export interface Props extends Collapsible.Props {}
}
