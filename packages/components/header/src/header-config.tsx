"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Header } from "./header";

export const [HeaderConfig, useHeaderConfig] = createConfigContext({
  displayName: "HeaderConfig",
});

export namespace HeaderConfig {
  export interface Props
    extends Header.Props,
      GlobalConfigProps<Header.Props> {}
}
