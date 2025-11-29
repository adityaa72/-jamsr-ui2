"use client";

import { IconButton } from "@jamsrui/icon-button";
import { ToggleIcon } from "./icons";
import { useSidebarState } from "./sidebar-state-provider";

export const SidebarToggle = (props: SidebarToggle.Props) => {
  const { toggleSidebar } = useSidebarState();
  const children = <ToggleIcon className="size-5" />;
  return (
    <IconButton
      label="Toggle Sidebar"
      onClick={toggleSidebar}
      variant="light"
      size="sm"
      radius="md"
      {...props}
    >
      {children}
    </IconButton>
  );
};

export namespace SidebarToggle {
  export interface Props extends Partial<IconButton.Props> {}
}
