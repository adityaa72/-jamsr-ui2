"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Text } from "./text";

export const [TextConfig, useTextConfig] =
  createConfigContext<TextConfig.Props>({
    displayName: "TextConfigContext",
  });

export namespace TextConfig {
  export interface Props extends Text.Props, GlobalConfigProps<Text.Props> {}
}
