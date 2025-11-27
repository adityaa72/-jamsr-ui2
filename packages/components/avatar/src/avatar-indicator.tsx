"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useAvatarContext } from "./avatar-context";

import type { UIProps } from "@jamsrui/utils";

export const AvatarIndicator = (props: AvatarIndicator.Props) => {
  const { getIndicatorProps } = useAvatarContext();
  const renderElement = useRenderElement("div", {
    props: [getIndicatorProps(props)],
  });
  return renderElement;
};

export namespace AvatarIndicator {
  export interface Props extends UIProps<"div"> {}
}
