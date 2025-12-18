"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { IconButton } from "./icon-button";

export const [IconButtonConfig, useIconButtonConfig] = createConfigContext({
  displayName: "IconButtonConfig",
});

export namespace IconButtonConfig {
  export interface Props extends WithGlobalConfig<IconButton.Props> {}
}
