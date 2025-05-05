import { createContext, use } from "react";
import { CircularProgress } from "./circular-progress";

const CircularProgressContext = createContext<CircularProgressConfig.Props>({});
export const CircularProgressConfig = (props: CircularProgressConfig.Props) => {
  const { children, ...restProps } = props;
  return (
    <CircularProgressContext value={restProps}>
      {children}
    </CircularProgressContext>
  );
};

export const useCircularProgressConfig = () => {
  const context = use(CircularProgressContext);
  return context;
};

export namespace CircularProgressConfig {
  export interface Props extends CircularProgress.Props {}
}
