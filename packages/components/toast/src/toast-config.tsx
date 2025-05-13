import { createContext, use } from "react";

import type { Toast } from "./toast";

const ToastContext = createContext<ToastConfig.Props>({});
export const ToastConfig = (props: ToastConfig.Props) => {
  const { children, ...restProps } = props;
  return <ToastContext value={restProps}>{children}</ToastContext>;
};

export const useToastConfig = () => {
  const context = use(ToastContext);
  return context;
};

export namespace ToastConfig {
  export interface Props extends Toast.Props {}
}
