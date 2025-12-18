"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Dialog } from "./dialog";

export const [DialogConfig, useDialogConfig] =
  createConfigContext<DialogConfig.Props>({
    displayName: "DialogConfigContext",
  });

export namespace DialogConfig {
  export interface Props extends WithGlobalConfig<Dialog.Props> {}
}
