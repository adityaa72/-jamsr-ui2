"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useTabsContext } from "./tabs-context";

import type { UIProps } from "@jamsrui/utils";

export const TabPanel = (props: TabPanel.Props) => {
  const { value: panelValue } = props;
  const { getPanelProps, value } = useTabsContext();
  const isSelected = value === panelValue;

  const renderElement = useRenderElement("div", {
    props: [getPanelProps(props), {}],
  });
  if (!isSelected) return null;
  return renderElement;
};

export namespace TabPanel {
  export interface Props extends UIProps<"div"> {
    value: React.ReactNode;
  }
}
