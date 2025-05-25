import { createConfigContext } from "@jamsr-ui/utils";

import type { Switch } from "./switch";

export const [SwitchConfig, useSwitchConfig] =
  createConfigContext<SwitchConfig.Props>({
    displayName: "SwitchConfig",
  });

export namespace SwitchConfig {
  export interface Props extends Switch.Props {}
}
