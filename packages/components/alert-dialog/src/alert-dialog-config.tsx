import { createConfigContext } from "@jamsrui/utils";

import type { AlertDialog } from "./alert-dialog";

export const [AlertDialogConfig, useAlertDialogConfig] =
  createConfigContext<AlertDialogConfig.Props>({
    displayName: "AlertDialogConfig",
  });

export namespace AlertDialogConfig {
  export interface Props extends AlertDialog.Props {}
}
