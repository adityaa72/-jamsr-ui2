"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Kbd } from "./kbd";

export const [KbdConfig, useKbdConfig] = createConfigContext({
  displayName: "KbdConfig",
});

export namespace KbdConfig {
  export interface Props extends WithGlobalConfig<Kbd.Props> {}
}
