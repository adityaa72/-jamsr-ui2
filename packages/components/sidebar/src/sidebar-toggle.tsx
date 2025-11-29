"use client";

import { IconButton } from "@jamsrui/icon-button";

import { ToggleIcon } from "./icons";
import { useSidebarState } from "./sidebar-state-provider";

export const SidebarToggle = (props: SidebarToggle.Props) => {
  const { children = <ToggleIcon className="size-5" />, ...restProps } = props;
  const { toggleSidebar } = useSidebarState();
  return (
    <IconButton
      label="Toggle Sidebar"
      onClick={toggleSidebar}
      radius="md"
      size="sm"
      variant="light"
      {...restProps}
    >
      {children}
    </IconButton>
  );
};

export namespace SidebarToggle {
  export interface Props extends Partial<IconButton.Props> {}
}
