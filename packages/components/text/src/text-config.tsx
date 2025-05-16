import { createConfigContext } from "@jamsr-ui/utils";

import type { Text } from "./text";

export const [TextConfig, useTextConfig] =
  createConfigContext<TextConfig.Props>({
    displayName: "TextConfigContext",
  });

export namespace TextConfig {
  export interface Props extends Text.Props {}
}
