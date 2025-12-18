"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";
import { Textarea } from "./textarea";

export const [TextareaConfig, useTextareaConfig] =
  createConfigContext<TextareaConfig.Props>({
    displayName: "TextareaConfigContext",
  });

export namespace TextareaConfig {
  export interface Props extends WithGlobalConfig<Textarea.Props> {}
}
