"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps  } from "@jamsrui/utils";

import { useSidebarConfig } from "./sidebar-config";
import { SidebarContext } from "./sidebar-context";
import {
  SidebarStateProvider,
  useSidebarState,
} from "./sidebar-state-provider";
import { useSidebar } from "./use-sidebar";

import type {UIProps} from "@jamsrui/utils";

const SidebarWrapperInner = (props: SidebarWrapper.Props) => {
  const config = useSidebarConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useSidebar(mergedProps);
  const { getWrapperProps } = ctx;
  const { state } = useSidebarState();
  const renderElement = useRenderElement("div", {
    props: [
      getWrapperProps(),
      {
        "data-state": state,
      },
    ],
  });
  return <SidebarContext value={ctx}>{renderElement}</SidebarContext>;
};

export const SidebarWrapper = (props: SidebarWrapper.Props) => {
  return (
    <SidebarStateProvider>
      <SidebarWrapperInner {...props} />
    </SidebarStateProvider>
  );
};

export namespace SidebarWrapper {
  export interface Props extends UIProps<"div"> {}
}
