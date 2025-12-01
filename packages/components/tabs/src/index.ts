import { Tab } from "./tab";
import { TabIndicator } from "./tab-indicator";
import { TabList } from "./tab-list";
import { TabPanel } from "./tab-panel";
import { Tabs as TabsRoot } from "./tabs";

export { TabsConfig, useTabsConfig } from "./tabs-config";
export { Tab, TabIndicator, TabList, TabPanel };

export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  List: TabList,
  Tab: Tab,
  Panel: TabPanel,
  Indicator: TabIndicator,
});
