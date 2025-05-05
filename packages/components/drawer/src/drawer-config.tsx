import { createContext, use } from "react";
import { Drawer } from "./drawer";

const DrawerContext = createContext<DrawerConfig.Props>({});
export const DrawerConfig = (props: DrawerConfig.Props) => {
  const { children, ...restProps } = props;
  return <DrawerContext value={restProps}>{children}</DrawerContext>;
};

export const useDrawerConfig = () => {
  const context = use(DrawerContext);
  return context;
};

export namespace DrawerConfig {
  export interface Props extends Drawer.Props {}
}
