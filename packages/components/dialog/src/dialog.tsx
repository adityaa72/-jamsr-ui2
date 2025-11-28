"use client";

import { DialogContext } from "./dialog-context";
import { useDialog } from "./use-dialog";

export const Dialog = (props: Dialog.Props) => {
  const { children } = props;
  const ctx = useDialog(props);
  return <DialogContext value={ctx}>{children}</DialogContext>;
};

export namespace Dialog {
  export interface Props extends useDialog.Props {
    children: React.ReactNode;
  }
}
