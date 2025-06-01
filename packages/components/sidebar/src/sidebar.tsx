import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useSidebarConfig } from "./sidebar-config";
import { SidebarContext } from "./sidebar-context";
import { useSidebarState } from "./sidebar-provider";
import { useSidebar } from "./use-sidebar";

export const Sidebar = (props: Sidebar.Props) => {
  const config = useSidebarConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useSidebar(mergedProps);
  const { state } = useSidebarState();
  const { getRootProps } = ctx;
  const renderElement = useRenderElement("div", {
    props: [
      getRootProps({}),
      {
        "data-state": state,
      },
    ],
  });
  return <SidebarContext value={ctx}>{renderElement}</SidebarContext>;
};

export namespace Sidebar {
  export interface Props extends useSidebar.Props {}
}
