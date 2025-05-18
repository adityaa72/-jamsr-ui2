import { createConfigContext } from "@jamsr-ui/utils";

import type { Tooltip } from "./tooltip";

export const [TooltipConfig, useTooltipConfig] =
  createConfigContext<TooltipConfig.Props>({
    displayName: "TooltipConfigContext",
  });

export namespace TooltipConfig {
  export interface Props extends Tooltip.Props {}
}
