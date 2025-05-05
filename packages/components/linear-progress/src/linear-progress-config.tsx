import { createContext, use } from "react";
import { LinearProgress } from "./linear-progress";

const LinearProgressContext = createContext<LinearProgressConfig.Props>({});
export const LinearProgressConfig = (props: LinearProgressConfig.Props) => {
  const { children, ...restProps } = props;
  return (
    <LinearProgressContext value={restProps}>{children}</LinearProgressContext>
  );
};

export const useLinearProgressConfig = () => {
  const context = use(LinearProgressContext);
  return context;
};

export namespace LinearProgressConfig {
  export interface Props extends LinearProgress.Props {}
}
