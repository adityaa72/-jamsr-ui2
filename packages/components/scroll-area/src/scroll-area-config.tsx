"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { ScrollArea } from "./scroll-area";

export const [ScrollAreaConfig, useScrollAreaConfig] = createConfigContext({
  displayName: "ScrollAreaConfig",
});

export namespace ScrollAreaConfig {
  export interface Props extends WithGlobalConfig<ScrollArea.Props> {}
}
