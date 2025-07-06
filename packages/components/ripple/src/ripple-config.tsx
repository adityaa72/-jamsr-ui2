import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Ripple } from "./ripple";

export const [RippleConfig, useRippleConfig] = createConfigContext({
  displayName: "RippleConfig",
});

export namespace RippleConfig {
  export interface Props
    extends Ripple.Props,
      GlobalConfigProps<Ripple.Props> {}
}
