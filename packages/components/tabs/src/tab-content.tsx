import { useRenderElement } from "@jamsrui/hooks";

import { useTabsContext } from "./tabs-context";

import type { UIProps } from "@jamsrui/utils";

export const TabContent = (props: TabContent.Props) => {
  const { getContentProps } = useTabsContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace TabContent {
  export interface Props extends UIProps<"div"> {}
}
