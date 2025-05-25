import { FloatingFocusManager } from "@floating-ui/react";

import { useDrawerContext } from "./drawer-context";

export const DrawerFocusManager = (props: DrawerFocusManager.Props) => {
  const { children } = props;
  const { getFocusManagerProps } = useDrawerContext();
  return (
    <FloatingFocusManager {...getFocusManagerProps()}>
      {children}
    </FloatingFocusManager>
  );
};

export namespace DrawerFocusManager {
  export interface Props {
    children: React.ReactElement;
  }
}
