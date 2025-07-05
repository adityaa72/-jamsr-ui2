import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { TabList } from "./tab-list";
import { TabPanel } from "./tab-panel";
import { useTabsConfig } from "./tabs-config";
import { TabsContext } from "./tabs-context";
import { useTabs } from "./use-tabs";

export const Tabs = (props: Tabs.Props) => {
  const { children } = props;
  const config = useTabsConfig();
  const mergedProps = mergeConfigProps(config,config, props);
  const ctx = useTabs(mergedProps);
  const { getRootProps } = ctx;

  const composedChildren = (
    <>
      <TabList>{children}</TabList>
      <TabPanel />
    </>
  );
  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return <TabsContext value={ctx}>{renderElement}</TabsContext>;
};

export namespace Tabs {
  export interface Props extends useTabs.Props {}
}
