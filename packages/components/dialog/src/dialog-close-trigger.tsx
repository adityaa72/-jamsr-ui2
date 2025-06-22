import { cloneElement, isValidElement } from "react";

import { useDialogContext } from "./dialog-context";

import type { ComponentProps } from "react";

export const DialogCloseTrigger = (props: DialogCloseTrigger.Props) => {
  const { children } = props;
  const { getTriggerCloseProps } = useDialogContext();

  if (isValidElement<ComponentProps<"button">>(children)) {
    return cloneElement(children, getTriggerCloseProps(children.props));
  }

  console.warn("Invalid children passed to DialogCloseTrigger");
  return null;
};
export namespace DialogCloseTrigger {
  export interface Props {
    children: React.ReactElement<unknown>;
  }
}
