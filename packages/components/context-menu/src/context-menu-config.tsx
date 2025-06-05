import { createConfigContext } from "@jamsrui/utils";

export const [ContextMenuConfig, useContextMenuConfig] =
  createConfigContext<ContextMenuConfig.Props>({
    displayName: "ContextMenuConfig",
  });

export namespace ContextMenuConfig {
  export interface Props {}
}
