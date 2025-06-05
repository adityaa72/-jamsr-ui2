import { createContext, use } from "react";

export const ContextMenuFloatingContext =
  createContext<ContextMenuFloatingContext.Props>({
    setHasFocusInside: () => {},
    activeIndex: null,
    getItemProps: () => ({}),
  });

export const useContextMenuFloatingContext = () =>
  use(ContextMenuFloatingContext);

export namespace ContextMenuFloatingContext {
  export interface Props {
    setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
    activeIndex: number | null;
    getItemProps: (
      props?: React.HTMLProps<HTMLElement>
    ) => React.HTMLProps<HTMLElement>;
  }
}
