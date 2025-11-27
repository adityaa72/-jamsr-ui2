"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useAvatarContext } from "./avatar-context";

import type { UIProps } from "@jamsrui/utils";

export const AvatarRoot = (_props: AvatarRoot.Props) => {
  const { getRootProps } = useAvatarContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps()],
  });
  return renderElement;
};

export namespace AvatarRoot {
  export interface Props extends UIProps<"div"> {}
}
