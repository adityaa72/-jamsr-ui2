import { Toast as ToastRoot } from "./toast";
import { ToastConfig, useToastConfig } from "./toast-config";

export { toast, Toaster } from "sonner";
export { ToastConfig, useToastConfig };

export const Toast = Object.assign(ToastRoot, {});

export namespace Toast {
  export interface Props extends ToastRoot.Props {}
  export interface Config extends ToastConfig.Props {}
}
