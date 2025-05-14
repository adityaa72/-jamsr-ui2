import { createContext, use } from "react";

import type { useAlert } from "./use-alert";

const AlertContext = createContext<AlertContextProvider.Type | null>(null);

export const AlertContextProvider = (props: AlertContextProvider.Props) => {
  const { children, ctx } = props;
  return <AlertContext value={ctx}>{children}</AlertContext>;
};

export const useAlertContext = () => {
  const ctx = use(AlertContext);
  if (!ctx)
    throw new Error("useAlertContext must be used within AlertContextProvider");
  return ctx;
};

export namespace AlertContextProvider {
  export interface Type extends ReturnType<typeof useAlert> {}

  export interface Props {
    ctx: Type;
    children: React.ReactNode;
  }
}
