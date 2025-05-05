import { createContext, use } from "react";
import { Alert } from "./alert";

const AlertContext = createContext<AlertConfig.Props>({});
export const AlertConfig = (props: AlertConfig.Props) => {
  const { children, ...restProps } = props;
  return <AlertContext value={restProps}>{children}</AlertContext>;
};

export const useAlertConfig = () => {
  const context = use(AlertContext);
  return context;
};

export namespace AlertConfig {
  export interface Props extends Alert.Props {}
}
