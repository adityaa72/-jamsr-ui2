import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Tooltip } from "./tooltip";

export const [TooltipConfig, useTooltipConfig] =
  createConfigContext<TooltipConfig.Props>({
    displayName: "TooltipConfigContext",
  });

export namespace TooltipConfig {
  export interface Props extends Tooltip.Props, GlobalConfigProps<Tooltip.Props> {}
}
