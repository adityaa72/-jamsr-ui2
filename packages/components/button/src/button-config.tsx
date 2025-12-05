"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { ButtonRoot } from "./button";
import { ButtonLoading } from "./button-loading";

export const [ButtonConfig, useButtonConfig] =
  createConfigContext<ButtonConfig.Props>({
    displayName: "ButtonConfigContext",
  });

export namespace ButtonConfig {
  export interface Props extends WithGlobalConfig<ButtonRoot.Props> {
    slots?: {
      loading?: React.JSXElementConstructor<ButtonLoading.Props>;
    };
  }
}
