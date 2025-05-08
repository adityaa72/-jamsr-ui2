import { createContext, use } from "react";
import { Alert } from "./alert";

const AlertConfigContext = createContext<AlertConfig.Props>({});
export const AlertConfig = (props: AlertConfig.Props) => {
  const { children, ...restProps } = props;
  return <AlertConfigContext value={restProps}>{children}</AlertConfigContext>;
};

export const useAlertConfig = () => {
  const context = use(AlertConfigContext);
  return context;
};

export namespace AlertConfig {
  export interface Props extends Alert.Props {}
}
