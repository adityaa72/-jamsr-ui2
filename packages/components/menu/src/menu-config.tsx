import { createContext, use } from "react";

import type { Menu } from "./menu";

const MenuContext = createContext<MenuConfig.Props>({});
export const MenuConfig = (props: MenuConfig.Props) => {
  const { children, ...restProps } = props;
  return <MenuContext value={restProps}>{children}</MenuContext>;
};

export const useMenuConfig = () => {
  const context = use(MenuContext);
  return context;
};

export namespace MenuConfig {
  export interface Props extends Menu.Props {}
}
