"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";
import { Label } from "./label";

export const [LabelConfig, useLabelConfig] =
  createConfigContext<LabelConfig.Props>({
    displayName: "LabelConfigContext",
  });

export namespace LabelConfig {
  export interface Props extends WithGlobalConfig<Label.Props> {}
}
