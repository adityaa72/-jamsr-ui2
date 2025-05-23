import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { TabList } from "./tab-list";
import { TabPanel } from "./tab-panel";
import { useTabsConfig } from "./tabs-config";
import { TabsContext } from "./tabs-context";
import { useTabs } from "./use-tabs";

export const Tabs = (props: Tabs.Props) => {
  const { children } = props;
  const config = useTabsConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useTabs(mergedProps);
  const { getRootProps } = ctx;

  const composedChildren = <TabList>{children}</TabList>;
  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return (
    <TabsContext value={ctx}>
      {renderElement}
      <TabPanel />
    </TabsContext>
  );
};

export namespace Tabs {
  export interface Props extends useTabs.Props {}
}
