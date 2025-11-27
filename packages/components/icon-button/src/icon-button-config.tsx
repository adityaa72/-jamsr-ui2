"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { IconButton } from "./icon-button";

export const [IconButtonConfig, useIconButtonConfig] = createConfigContext({
  displayName: "IconButtonConfig",
});

export namespace IconButtonConfig {
  export interface Props
    extends IconButton.Props,
      GlobalConfigProps<IconButton.Props> {}
}
