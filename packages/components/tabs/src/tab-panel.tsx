import { useRenderElement } from "@jamsr-ui/hooks";

import { useTabsContext } from "./tabs-context";

import type { UIProps } from "@jamsr-ui/utils";

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
