import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useAvatarConfig } from "./avatar-config";
import { useAvatar } from "./use-avatar";

import type { UIProps } from "@jamsr-ui/utils";

export const Avatar = (props: Avatar.Props) => {
  const config = useAvatarConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useAvatar(mergedProps);
  const { getRootProps } = ctx;

  const renderElement = useRenderElement("img", {
    props: [getRootProps({})],
  });
  return renderElement;
};

export namespace Avatar {
  export interface Props extends UIProps<"img"> {}
}
