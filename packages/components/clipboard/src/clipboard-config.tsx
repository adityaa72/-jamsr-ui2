"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Clipboard } from "./clipboard";

export const [ClipboardConfig, useClipboardConfig] =
  createConfigContext<ClipboardConfig.Props>({
    displayName: "ClipboardConfig",
  });

export namespace ClipboardConfig {
  export interface Props extends Clipboard.Props, GlobalConfigProps<Clipboard.Props> {}
}
