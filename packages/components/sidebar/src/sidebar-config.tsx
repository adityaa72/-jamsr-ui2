import { createContext, use } from "react";
import { Sidebar } from "./sidebar";

const SidebarContext = createContext<SidebarConfig.Props>({});
export const SidebarConfig = (props: SidebarConfig.Props) => {
  const { children, ...restProps } = props;
  return <SidebarContext value={restProps}>{children}</SidebarContext>;
};

export const useSidebarConfig = () => {
  const context = use(SidebarContext);
  return context;
};

export namespace SidebarConfig {
  export interface Props extends Sidebar.Props {}
}
