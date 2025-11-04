import { mergeConfigProps } from "@jamsrui/utils";

import { useAvatarConfig } from "./avatar-config";
import { AvatarContext } from "./avatar-context";
import { AvatarFallback } from "./avatar-fallback";
import { AvatarImage } from "./avatar-image";
import { AvatarRoot } from "./avatar-root";
import { useAvatar } from "./use-avatar";

export const Avatar = (props: Avatar.Props) => {
  const { children } = props;
  const config = useAvatarConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useAvatar(mergedProps);
  return (
    <AvatarContext value={ctx}>
      <AvatarRoot>
        <AvatarImage />
        <AvatarFallback>{children}</AvatarFallback>
      </AvatarRoot>
    </AvatarContext>
  );
};

export namespace Avatar {
  export interface Props extends useAvatar.Props {}
}
