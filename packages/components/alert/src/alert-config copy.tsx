import { createContext, use } from "react";

import type { Alert } from "./alert";
import type { AlertContent } from "./alert-content";
import type { AlertDescription } from "./alert-description";
import type { AlertTitle } from "./alert-title";

const AlertConfigContext = createContext<AlertConfig.Type>({});
export const AlertConfig = (props: AlertConfig.Props) => {
  const { children, ...restProps } = props;
  return <AlertConfigContext value={restProps}>{children}</AlertConfigContext>;
};

export const useAlertConfig = () => use(AlertConfigContext);

export namespace AlertConfig {
  export interface Type {
    root?: Alert.Props;
    title?: AlertTitle.Props;
    content?: AlertContent.Props;
    description?: AlertDescription.Props;
  }

  export interface Props extends Type {
    children: React.ReactNode;
  }
}
