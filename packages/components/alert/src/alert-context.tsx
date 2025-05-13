import { createContext, use } from "react";

import type { AlertDescription } from "./alert-description";
import type { AlertTitle } from "./alert-title";

const AlertContext = createContext<AlertContextProvider.ContextType | null>(
  null
);

export const AlertContextProvider = (props: AlertContextProvider.Props) => {
  const { children, slotProps } = props;
  return <AlertContext value={{ slotProps }}>{children}</AlertContext>;
};

export const useAlertContext = () => {
  const ctx = use(AlertContext);
  if (!ctx)
    throw new Error("useAlertContext must be used within AlertContextProvider");
  return ctx;
};

export namespace AlertContextProvider {
  export interface ContextType {
    slotProps?: {
      title?: AlertTitle.Props;
      description?: AlertDescription.Props;
    };
  }

  export interface Props extends ContextType {
    children: React.ReactNode;
  }
}
