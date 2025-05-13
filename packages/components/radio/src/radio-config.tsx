import { createContext, use } from "react";

import type { Radio } from "./radio";

const RadioContext = createContext<RadioConfig.Props>({});
export const RadioConfig = (props: RadioConfig.Props) => {
  const { children, ...restProps } = props;
  return <RadioContext value={restProps}>{children}</RadioContext>;
};

export const useRadioConfig = () => {
  const context = use(RadioContext);
  return context;
};

export namespace RadioConfig {
  export interface Props extends Radio.Props {}
}
