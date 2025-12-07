"use client";
import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useLinkConfig } from "./link-config";
import { useLink } from "./use-link";

export const Link = (props: Link.Props) => {
  const config = useLinkConfig();
  const mergedProps = mergeConfigProps(config,config, props);
  const ctx = useLink(mergedProps);
  const { getRootProps } = ctx;

  const renderElement = useRenderElement("a", {
    props: [getRootProps({})],
  });
  return renderElement;
};

export namespace Link {
  export interface Props extends useLink.Props {}
}
