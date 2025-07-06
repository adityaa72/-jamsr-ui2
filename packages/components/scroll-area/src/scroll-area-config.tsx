import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { ScrollArea } from "./scroll-area";

export const [ScrollAreaConfig, useScrollAreaConfig] = createConfigContext({
  displayName: "ScrollAreaConfig",
});

export namespace ScrollAreaConfig {
  export interface Props
    extends ScrollArea.Props,
      GlobalConfigProps<ScrollArea.Props> {}
}
