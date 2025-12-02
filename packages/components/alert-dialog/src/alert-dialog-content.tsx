"use client";

import { AlertDialogContainer } from "./alert-dialog-container";
import { AlertDialogContentInner } from "./alert-dialog-content-inner";

export const AlertDialogContent = (props: AlertDialogContent.Props) => {
  return (
    <AlertDialogContainer>
      <AlertDialogContentInner {...props} />
    </AlertDialogContainer>
  );
};

export namespace AlertDialogContent {
  export interface Props extends AlertDialogContentInner.Props {}
}
