import { createConfigContext } from "@jamsrui/utils";

import type { AlertPopover } from "./alert-popover";

export const [AlertPopoverConfig, useAlertPopoverConfig] =
  createConfigContext<AlertPopoverConfig.Props>({
    displayName: "AlertPopoverConfig",
  });

export namespace AlertPopoverConfig {
  export interface Props extends AlertPopover.Props {}
}
