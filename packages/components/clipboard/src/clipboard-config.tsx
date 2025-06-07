import { createConfigContext } from "@jamsrui/utils";

import type { Clipboard } from "./clipboard";

export const [ClipboardConfig, useClipboardConfig] =
  createConfigContext<ClipboardConfig.Props>({
    displayName: "ClipboardConfig",
  });

export namespace ClipboardConfig {
  export interface Props extends Clipboard.Props {}
}
