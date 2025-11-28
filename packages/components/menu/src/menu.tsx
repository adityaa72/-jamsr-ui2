"use client";

import {
  FloatingNode,
  FloatingTree,
  useFloatingParentNodeId,
} from "@floating-ui/react";

import { MenuContext } from "./menu-context";
import { useMenu } from "./use-menu";

const MenuInner = (props: Menu.Props) => {
  const ctx = useMenu(props);
  const { children } = props;
  const { getNodeProps } = ctx;
  return (
    <MenuContext value={ctx}>
      <FloatingNode {...getNodeProps()}>{children}</FloatingNode>
    </MenuContext>
  );
};

export const Menu = (props: Menu.Props) => {
  const parentId = useFloatingParentNodeId();
  const { children } = props;
  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuInner {...props}>{children}</MenuInner>
      </FloatingTree>
    );
  }
  return <MenuInner {...props}>{children}</MenuInner>;
};

export namespace Menu {
  export interface Props extends useMenu.Props {
    children: React.ReactNode;
  }
}
