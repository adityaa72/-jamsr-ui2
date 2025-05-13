import { createContext, use } from "react";

import type { Toggle } from "./toggle";

const ToggleContext = createContext<ToggleConfig.Props>({});
export const ToggleConfig = (props: ToggleConfig.Props) => {
  const { children, ...restProps } = props;
  return <ToggleContext value={restProps}>{children}</ToggleContext>;
};

export const useToggleConfig = () => {
  const context = use(ToggleContext);
  return context;
};

export namespace ToggleConfig {
  export interface Props extends Toggle.Props {}
}
