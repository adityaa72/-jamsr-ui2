import { createContext, use } from "react";

import type { Tabs } from "./tabs";

const TabsContext = createContext<TabsConfig.Props>({});
export const TabsConfig = (props: TabsConfig.Props) => {
  const { children, ...restProps } = props;
  return <TabsContext value={restProps}>{children}</TabsContext>;
};

export const useTabsConfig = () => {
  const context = use(TabsContext);
  return context;
};

export namespace TabsConfig {
  export interface Props extends Tabs.Props {}
}
