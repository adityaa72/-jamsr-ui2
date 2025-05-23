import { useRenderElement } from "@jamsr-ui/hooks";

import { TabContent } from "./tab-content";
import { TabCursor } from "./tab-cursor";
import { useTabsContext } from "./tabs-context";
import { useTab } from "./use-tab";

import type { UIProps } from "@jamsr-ui/utils";

export const Tab = (props: Tab.Props) => {
  const { getTabProps } = useTabsContext();
  const { heading, value, ...elementProps } = getTabProps(props);
  const { handleClick, isActive } = useTab({ value });

  const composedChildren = (
    <>
      <TabContent>{heading}</TabContent>
      {!!isActive && <TabCursor />}
    </>
  );

  const renderElement = useRenderElement("button", {
    props: [
      elementProps,
      { onClick: handleClick },
      { children: composedChildren },
    ],
  });
  return renderElement;
};

export namespace Tab {
  export interface Props extends UIProps<"button"> {
    value: string;
    heading: React.ReactNode;
  }
}
