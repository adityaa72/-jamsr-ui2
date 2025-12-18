"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { tabsVariant } from "./styles";
import { useTabsConfig } from "./tabs-config";
import { TabsContext } from "./tabs-context";
import { useTabs } from "./use-tabs";

export const Tabs = (props: Tabs.Props) => {
  const config = useTabsConfig();
  const mergedProps = mergeConfigProps(
    tabsVariant.defaultVariants,
    config,
    props
  );
  const ctx = useTabs(mergedProps);
  const { getRootProps } = ctx;

  const renderElement = useRenderElement("div", {
    props: [getRootProps({})],
  });
  return <TabsContext value={ctx}>{renderElement}</TabsContext>;
};

export namespace Tabs {
  export interface Props extends useTabs.Props {}
}
