"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useTabsContext } from "./tabs-context";
import { useTab } from "./use-tab";

import { dataAttr, type UIProps } from "@jamsrui/utils";
import { TabContext } from "./tab-context";

export const Tab = (props: Tab.Props) => {
  const { getTabProps } = useTabsContext();
  const { value, ...elementProps } = getTabProps(props);
  const { handleClick, isActive } = useTab({ value });

  const renderElement = useRenderElement("button", {
    props: [
      elementProps,
      { onClick: handleClick, "data-selected": dataAttr(isActive) },
    ],
  });
  return <TabContext value={{ isActive }}>{renderElement}</TabContext>;
};

export namespace Tab {
  export interface Props extends UIProps<"button"> {
    value: string;
  }
}
