import { createContext, use } from "react";
import { Switch } from "./switch";

const SwitchContext = createContext<SwitchConfig.Props>({});
export const SwitchConfig = (props: SwitchConfig.Props) => {
  const { children, ...restProps } = props;
  return <SwitchContext value={restProps}>{children}</SwitchContext>;
};

export const useSwitchConfig = () => {
  const context = use(SwitchContext);
  return context;
};

export namespace SwitchConfig {
  export interface Props extends Switch.Props {}
}
