import { createContext, use } from "react";
import { NumberInput } from "./number-input";

const NumberInputContext = createContext<NumberInputConfig.Props>({});
export const NumberInputConfig = (props: NumberInputConfig.Props) => {
  const { children, ...restProps } = props;
  return <NumberInputContext value={restProps}>{children}</NumberInputContext>;
};

export const useNumberInputConfig = () => {
  const context = use(NumberInputContext);
  return context;
};

export namespace NumberInputConfig {
  export interface Props extends NumberInput.Props {}
}
