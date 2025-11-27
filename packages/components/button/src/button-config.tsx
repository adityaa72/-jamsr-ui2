"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { ButtonRoot } from "./button";

export const [ButtonConfig, useButtonConfig] =
  createConfigContext<ButtonConfig.Props>({
    displayName: "ButtonConfigContext",
  });

export namespace ButtonConfig {
  export interface Props
    extends ButtonRoot.Props,
      GlobalConfigProps<ButtonRoot.Props> {}
}
