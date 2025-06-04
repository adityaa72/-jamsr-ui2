import { useRenderElement } from "@jamsrui/hooks";
import { AvatarIcon } from "@jamsrui/icons";

import { useAvatarContext } from "./avatar-context";

import type { UIProps } from "@jamsrui/utils";

export const AvatarFallback = (props: AvatarFallback.Props) => {
  const { getFallbackProps, fallBackString, hasImage } = useAvatarContext();
  const fallBack = fallBackString || <AvatarIcon />;
  const renderElement = useRenderElement("div", {
    props: [
      getFallbackProps(props),
      {
        children: fallBack,
      },
    ],
  });
  if (hasImage) return null;
  return renderElement;
};

export namespace AvatarFallback {
  export interface Props extends UIProps<"div"> {}
}
