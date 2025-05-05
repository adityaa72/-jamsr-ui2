import { createContext, use } from "react";
import { Header } from "./header";

const HeaderContext = createContext<HeaderConfig.Props>({});
export const HeaderConfig = (props: HeaderConfig.Props) => {
  const { children, ...restProps } = props;
  return <HeaderContext value={restProps}>{children}</HeaderContext>;
};

export const useHeaderConfig = () => {
  const context = use(HeaderContext);
  return context;
};

export namespace HeaderConfig {
  export interface Props extends Header.Props {}
}
