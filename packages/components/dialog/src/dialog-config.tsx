import { createContext, use } from "react";
import { Dialog } from "./dialog";

const DialogContext = createContext<DialogConfig.Props>({});
export const DialogConfig = (props: DialogConfig.Props) => {
  const { children, ...restProps } = props;
  return <DialogContext value={restProps}>{children}</DialogContext>;
};

export const useDialogConfig = () => {
  const context = use(DialogContext);
  return context;
};

export namespace DialogConfig {
  export interface Props extends Dialog.Props {}
}
