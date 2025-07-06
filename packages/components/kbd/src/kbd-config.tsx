import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Kbd } from "./kbd";

export const [KbdConfig, useKbdConfig] = createConfigContext({
  displayName: "KbdConfig",
});

export namespace KbdConfig {
  export interface Props extends Kbd.Props, GlobalConfigProps<Kbd.Props> {}
}
