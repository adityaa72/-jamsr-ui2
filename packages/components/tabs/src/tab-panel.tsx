import { useRenderElement } from "@jamsrui/hooks";

import { useTabsContext } from "./tabs-context";

import type { UIProps } from "@jamsrui/utils";

export const TabPanel = (props: TabPanel.Props) => {
  const { getPanelProps, selectedTabContent } = useTabsContext();
  const renderElement = useRenderElement("div", {
    props: [getPanelProps(props), { children: selectedTabContent }],
  });
  return renderElement;
};

export namespace TabPanel {
  export interface Props extends UIProps<"div"> {}
}
