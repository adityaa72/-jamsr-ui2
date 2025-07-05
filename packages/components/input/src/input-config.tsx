import { createContext, use } from "react";

import type { Input } from "./input";

const InputContext = createContext<InputConfig.Props>({});
export const InputConfig = (props: InputConfig.Props) => {
  const { children, ...restProps } = props;
  return <InputContext value={restProps}>{children}</InputContext>;
};

export const useInputConfig = () => {
  const context = use(InputContext);
  return context;
};

export namespace InputConfig {
  export interface Props extends Input.Props, GlobalConfigProps<Input.Props> {}
}
