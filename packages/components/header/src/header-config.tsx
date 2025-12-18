"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Header } from "./header";

export const [HeaderConfig, useHeaderConfig] = createConfigContext({
  displayName: "HeaderConfig",
});

export namespace HeaderConfig {
  export interface Props extends WithGlobalConfig<Header.Props> {}
}
