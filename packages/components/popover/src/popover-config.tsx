import { createConfigContext } from "@jamsr-ui/utils";

import type { Popover } from "./popover";

export const [PopoverConfig, usePopoverConfig] =
  createConfigContext<PopoverConfig.Props>({
    displayName: "PopoverConfigContext",
  });

export namespace PopoverConfig {
  export interface Props extends Popover.Props {}
}
