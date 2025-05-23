import { createConfigContext } from "@jamsr-ui/utils";

import type { Dialog } from "./dialog";

export const [DialogConfig, useDialogConfig] =
  createConfigContext<DialogConfig.Props>({
    displayName: "DialogConfigContext",
  });

export namespace DialogConfig {
  export interface Props extends Dialog.Props {}
}
