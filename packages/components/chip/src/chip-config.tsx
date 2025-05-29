import { createConfigContext } from "@jamsr-ui/utils";

import type { Chip } from "./chip";

export const [ChipConfig, useChipConfig] =
  createConfigContext<ChipConfig.Props>({
    displayName: "ChipConfig",
  });

export namespace ChipConfig {
  export interface Props extends Chip.Props {}
}
