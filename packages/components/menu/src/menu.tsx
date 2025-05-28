import {
  FloatingNode,
  FloatingTree,
  useFloatingParentNodeId,
} from "@floating-ui/react";

import { MenuContext } from "./menu-context";
import { useMenu } from "./use-menu";

export const Menu = (props: Menu.Props) => {
  const ctx = useMenu(props);
  const parentId = useFloatingParentNodeId();
  const { children } = props;
  const { getNodeProps } = ctx;
  if (parentId === null) {
    return (
      <FloatingTree>
        <FloatingNode {...getNodeProps()}>
          <MenuContext value={ctx}>{children}</MenuContext>
        </FloatingNode>
      </FloatingTree>
    );
  }

  return (
    <MenuContext value={ctx}>
      <FloatingNode {...getNodeProps()}>{children}</FloatingNode>
    </MenuContext>
  );
};

export namespace Menu {
  export interface Props extends useMenu.Props {
    children: React.ReactNode;
  }
}
