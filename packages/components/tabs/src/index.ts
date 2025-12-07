import { Tab } from "./tab";
import { TabIndicator } from "./tab-indicator";
import { TabList } from "./tab-list";
import { TabPanel } from "./tab-panel";
import { Tabs as TabsRoot } from "./tabs";
import { TabsConfig, useTabsConfig } from "./tabs-config";
import { TabsContext, useTabsContext } from "./tabs-context";
import { TabsSlots, TabsVariants, tabsVariant } from "./styles";

export {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabsConfig,
  TabsContext,
  tabsVariant,
  useTabsConfig,
  useTabsContext,
  type TabsSlots,
  type TabsVariants,
};

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Panel: TabPanel,
  Indicator: TabIndicator,
});

export namespace Tabs {
  export interface Props extends TabsRoot.Props {}
  export interface Config extends TabsConfig.Props {}
  export interface List extends TabList.Props {}
  export interface Tab extends Tab.Props {}
  export interface Panel extends TabPanel.Props {}
  export interface Indicator extends TabIndicator.Props {}
}
