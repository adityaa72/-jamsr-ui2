"use client";

import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useIsMobile } from "@jamsrui/hooks";

type SidebarStateContextProps = {
  state: "expanded" | "collapsed";
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};
const SidebarStateContext = createContext<SidebarStateContextProps | null>(
  null
);
export const useSidebarState = () => {
  const ctx = use(SidebarStateContext);
  if (!ctx) {
    throw new Error("useSidebarState must be used within a SidebarProvider");
  }
  return ctx;
};

export const SidebarStateProvider = (props: SidebarStateProvider.Props) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const isMobile = useIsMobile();
  const toggleSidebar = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isMobile
      ? setIsOpenMobile((isOpen) => !isOpen)
      : setIsOpen((isOpen) => !isOpen);
  }, [isMobile]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "b" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state: SidebarStateContextProps["state"] = useMemo(() => {
    if (isMobile) {
      return isOpenMobile ? "expanded" : "collapsed";
    }
    return isOpen ? "expanded" : "collapsed";
  }, [isMobile, isOpen, isOpenMobile]);

  const value: SidebarStateContextProps = useMemo(
    () => ({
      isMobile,
      isOpen,
      setIsOpen,
      state,
      toggleSidebar,
    }),
    [isMobile, isOpen, state, toggleSidebar]
  );

  return <SidebarStateContext value={value}>{children}</SidebarStateContext>;
};
export namespace SidebarStateProvider {
  export interface Props {
    children: React.ReactNode;
  }
}
