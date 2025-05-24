import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useLinkConfig } from "./link-config";
import { useLink } from "./use-link";

export const Link = (props: Link.Props) => {
  const config = useLinkConfig();
  const mergedProps = mergeProps(config, props);
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
