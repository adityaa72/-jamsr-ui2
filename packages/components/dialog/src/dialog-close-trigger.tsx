import { cloneElement, isValidElement } from "react";

import { useDialogContext } from "./dialog-context";

export const DialogCloseTrigger = (props: DialogCloseTrigger.Props) => {
  const { children } = props;
  const { getTriggerCloseProps } = useDialogContext();

  if (isValidElement(children)) {
    return cloneElement(children, getTriggerCloseProps());
  }

  console.warn("Invalid children passed to DialogCloseTrigger");
  return null;
};
export namespace DialogCloseTrigger {
  export interface Props {
    children: React.ReactElement<unknown>;
  }
}
