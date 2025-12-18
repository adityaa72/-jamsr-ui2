"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";
import { Description } from "./description";

export const [DescriptionConfig, useDescriptionConfig] =
  createConfigContext<DescriptionConfig.Props>({
    displayName: "DescriptionConfigContext",
  });

export namespace DescriptionConfig {
  export interface Props extends WithGlobalConfig<Description.Props> {}
}
