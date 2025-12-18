"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Alert } from "./alert";

export const [AlertConfig, useAlertConfig] =
  createConfigContext<AlertConfig.Props>({
    displayName: "AlertConfigContext",
  });

export namespace AlertConfig {
  export interface Props extends WithGlobalConfig<Alert.Props> {
    merge?: boolean;
  }
}
