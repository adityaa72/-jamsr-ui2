import {
  FloatingNode,
  FloatingTree,
  useFloatingParentNodeId,
} from "@floating-ui/react";

import { ContextMenuContext } from "./context-menu-context";
import { useContextMenu } from "./use-context-menu";

const ContextMenuInner = (props: ContextMenu.Props) => {
  const ctx = useContextMenu(props);
  const { children } = props;
  const { getNodeProps } = ctx;
  return (
    <ContextMenuContext value={ctx}>
      <FloatingNode {...getNodeProps()}>{children}</FloatingNode>
    </ContextMenuContext>
  );
};

export const ContextMenu = (props: ContextMenu.Props) => {
  const parentId = useFloatingParentNodeId();
  const { children } = props;
  if (parentId === null) {
    return (
      <FloatingTree>
        <ContextMenuInner {...props}>{children}</ContextMenuInner>
      </FloatingTree>
    );
  }
  return <ContextMenuInner {...props}>{children}</ContextMenuInner>;
};
export namespace ContextMenu {
  export interface Props extends useContextMenu.Props {
    children: React.ReactNode;
  }
}
