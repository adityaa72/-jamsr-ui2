"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Avatar } from "./avatar";

export const [AvatarConfig, useAvatarConfig] =
  createConfigContext<AvatarConfig.Props>({
    displayName: "AvatarConfig",
  });

export namespace AvatarConfig {
  export interface Props
    extends Avatar.Props,
      GlobalConfigProps<Avatar.Props> {}
}
