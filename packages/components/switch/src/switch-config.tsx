import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Switch } from "./switch";

export const [SwitchConfig, useSwitchConfig] =
  createConfigContext<SwitchConfig.Props>({
    displayName: "SwitchConfig",
  });

export namespace SwitchConfig {
  export interface Props extends Switch.Props, GlobalConfigProps<Switch.Props> {}
}
