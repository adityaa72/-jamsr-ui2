"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { AlertDialog } from "./alert-dialog";

export const [AlertDialogConfig, useAlertDialogConfig] =
  createConfigContext<AlertDialogConfig.Props>({
    displayName: "AlertDialogConfig",
  });

export namespace AlertDialogConfig {
  export interface Props extends WithGlobalConfig<AlertDialog.Props> {}
}
