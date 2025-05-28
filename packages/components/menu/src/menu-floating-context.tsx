import { createContext, use } from "react";

export const MenuFloatingContext = createContext<MenuFloatingContext.Props>({
  setHasFocusInside: () => {},
  activeIndex: null,
  getItemProps: () => ({}),
});

export const useMenuFloatingContext = () => use(MenuFloatingContext);

export namespace MenuFloatingContext {
  export interface Props {
    setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
    activeIndex: number | null;
    getItemProps: (
      props?: React.HTMLProps<HTMLElement>
    ) => React.HTMLProps<HTMLElement>;
  }
}
