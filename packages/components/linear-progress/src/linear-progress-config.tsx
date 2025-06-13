import { createConfigContext } from "@jamsrui/utils";

import type { LinearProgress } from "./linear-progress";

export const [LinearProgressConfig, useLinearProgressConfig] =
  createConfigContext<LinearProgressConfig.Props>({
    displayName: "LinearProgressConfig",
  });

export namespace LinearProgressConfig {
  export interface Props extends LinearProgress.Props {}
}
