import { cloneElement, isValidElement } from "react";

import { useMenuContext } from "./menu-context";

export const MenuTrigger = (props: MenuTrigger.Props) => {
  const { children } = props;
  const { getTriggerProps } = useMenuContext();
  if (!isValidElement(children)) {
    console.warn("Invalid children passed to MenuTrigger");
    return null;
  }
  return cloneElement(children, getTriggerProps());
};
export namespace MenuTrigger {
  export interface Props {
    children?: React.ReactNode;
  }
}
