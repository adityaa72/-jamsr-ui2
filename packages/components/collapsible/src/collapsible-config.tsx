import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Collapsible } from "./collapsible";

export const [CollapsibleConfig, useCollapsibleConfig] =
  createConfigContext<CollapsibleConfig.Props>({
    displayName: "CollapsibleConfig",
  });

export namespace CollapsibleConfig {
  export interface Props extends Collapsible.Props, GlobalConfigProps<Collapsible.Props> {}
}
