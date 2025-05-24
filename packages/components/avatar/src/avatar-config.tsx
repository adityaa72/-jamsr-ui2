import { createConfigContext } from "@jamsr-ui/utils";

import type { Avatar } from "./avatar";

export const [AvatarConfig, useAvatarConfig] =
  createConfigContext<AvatarConfig.Props>({
    displayName: "AvatarConfig",
  });

export namespace AvatarConfig {
  export interface Props extends Avatar.Props {}
}
