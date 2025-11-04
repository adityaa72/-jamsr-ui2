import { Slot } from "@jamsrui/slot";
import { mergeConfigProps } from "@jamsrui/utils";

import { useAvatarConfig } from "./avatar-config";
import {
  AvatarContext,
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  useAvatar,
} from "./primitive";

import type { SlotsToReactNode } from "@jamsrui/utils";

import type { AvatarSlots } from "./primitive/styles";

export const Avatar = (props: Avatar.Props) => {
  const config = useAvatarConfig();
  const mergedProps = mergeConfigProps(config, props, props);
  const { children, slots, ...restProps } = mergedProps;
  const ctx = useAvatar(restProps);

  return (
    <AvatarContext value={ctx}>
      <Slot slot={slots?.root}>
        <AvatarRoot>
          <Slot slot={slots?.img}>
            <AvatarImage />
          </Slot>
          <Slot slot={slots?.fallback}>
            <AvatarFallback>{children}</AvatarFallback>
          </Slot>
        </AvatarRoot>
      </Slot>
    </AvatarContext>
  );
};

export namespace Avatar {
  export interface Props extends useAvatar.Props {
    slots?: SlotsToReactNode<AvatarSlots>;
  }
}
