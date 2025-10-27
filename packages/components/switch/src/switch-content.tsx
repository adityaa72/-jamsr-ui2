import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchContent = (props: SwitchContent.Props) => {
  const { getContentProps, hasContent } = useSwitchContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  if (!hasContent) return null;
  return renderElement;
};

export namespace SwitchContent {
  export interface Props extends UIProps<"div"> {}
}
