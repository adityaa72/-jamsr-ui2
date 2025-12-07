"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Toggle } from "./toggle";

export const [ToggleConfig, useToggleConfig] = createConfigContext({
  displayName: "ToggleContext",
});

export namespace ToggleConfig {
  export interface Props
    extends Toggle.Props,
      GlobalConfigProps<Toggle.Props> {}
}
