import { FloatingFocusManager } from "@floating-ui/react";

import { useDrawerContext } from "./drawer-context";

import type { FloatingFocusManagerProps } from "@floating-ui/react";

export const DrawerFocusManager = (props: DrawerFocusManager.Props) => {
  const { children } = props;
  const { getFocusManagerProps } = useDrawerContext();
  return (
    <FloatingFocusManager {...getFocusManagerProps(props)}>
      {children}
    </FloatingFocusManager>
  );
};

export namespace DrawerFocusManager {
  export interface Props extends FloatingFocusManagerProps {}
}
