import { createContext, use } from "react";

import type { Alert } from "./alert";

const AlertConfigContext = createContext<AlertConfig.Props>({});
export const AlertConfig = (props: AlertConfig.Props) => {
  const { children, ...restProps } = props;
  return <AlertConfigContext value={restProps}>{children}</AlertConfigContext>;
};

export const useAlertConfig = () => use(AlertConfigContext);

export namespace AlertConfig {
  export interface Props extends Alert.Props {}
}
