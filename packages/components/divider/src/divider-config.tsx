import { createConfigContext } from "@jamsr-ui/utils";

import type { Divider } from "./divider";

export const [DividerConfig, useDividerConfig] =
  createConfigContext<DividerConfig.Props>({
    displayName: "DividerConfig",
  });

export namespace DividerConfig {
  export interface Props extends Divider.Props {}
}
