import { useId } from "react";

import { useRenderElement } from "@jamsrui/hooks";
import { LayoutGroup } from "motion/react";

import { useTabsContext } from "./tabs-context";

import type { UIProps } from "@jamsrui/utils";

export const TabList = (props: TabList.Props) => {
  const { getTabListProps } = useTabsContext();
  const renderElement = useRenderElement("div", {
    props: [getTabListProps(props)],
  });
  const id = useId();
  return <LayoutGroup id={id}>{renderElement}</LayoutGroup>;
};

export namespace TabList {
  export interface Props extends UIProps<"div"> {}
}
