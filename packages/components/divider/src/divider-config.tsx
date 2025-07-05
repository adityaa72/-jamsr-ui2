import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Divider } from "./divider";

export const [DividerConfig, useDividerConfig] =
  createConfigContext<DividerConfig.Props>({
    displayName: "DividerConfig",
  });

export namespace DividerConfig {
  export interface Props extends Divider.Props, GlobalConfigProps<Divider.Props> {}
}
