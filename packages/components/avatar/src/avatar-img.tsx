import { useRenderElement } from "@jamsrui/hooks";

import { useAvatarContext } from "./avatar-context";

import type { UIProps } from "@jamsrui/utils";

export const AvatarImage = (props: AvatarImage.Props) => {
  const { getImgProps, hasImage } = useAvatarContext();
  const renderElement = useRenderElement("img", {
    props: [getImgProps(props)],
  });
  if (!hasImage) return null;
  return renderElement;
};

export namespace AvatarImage {
  export interface Props extends UIProps<"img"> {}
}
