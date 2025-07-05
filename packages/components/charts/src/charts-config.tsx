import { createContext, use } from "react";

import type { Charts } from "./charts";

const ChartsContext = createContext<ChartsConfig.Props>({});
export const ChartsConfig = (props: ChartsConfig.Props) => {
  const { children, ...restProps } = props;
  return <ChartsContext value={restProps}>{children}</ChartsContext>;
};

export const useChartsConfig = () => {
  const context = use(ChartsContext);
  return context;
};

export namespace ChartsConfig {
  export interface Props extends Charts.Props, GlobalConfigProps<Charts.Props> {}
}
