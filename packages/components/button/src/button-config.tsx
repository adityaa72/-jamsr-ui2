import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Button } from "./button";

export const [ButtonConfig, useButtonConfig] =
  createConfigContext<ButtonConfig.Props>({
    displayName: "ButtonConfigContext",
  });

export namespace ButtonConfig {
  export interface Props
    extends Button.Props,
      GlobalConfigProps<Button.Props> {}
}
