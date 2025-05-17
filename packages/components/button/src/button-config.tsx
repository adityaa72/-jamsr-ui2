import { createConfigContext } from "@jamsr-ui/utils";

import type { Button } from "./button";

export const [ButtonConfig, useButtonConfig] =
  createConfigContext<ButtonConfig.Props>({
    displayName: "ButtonConfigContext",
  });

export namespace ButtonConfig {
  export interface Props extends Button.Props {}
}
