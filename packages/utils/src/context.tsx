"use client";
import { createContext, use } from "react";

import { mergeProps } from "./merge-props";

export const createConfigContext = <T extends { children: React.ReactNode }>({
  displayName,
}: {
  displayName: string;
}) => {
  const Context = createContext<T>({} as T);
  Context.displayName = displayName;

  const ConfigProvider = (props: T & { merge?: boolean }) => {
    const { merge = true, ...elementProps } = props;
    const innerConfig = useConfig();
    const mergedProps = merge
      ? mergeProps(innerConfig, elementProps as T)
      : elementProps;
    const { children, ...restProps } = mergedProps;
    return <Context value={restProps as T}>{children}</Context>;
  };
  const useConfig = () => use(Context);
  return [ConfigProvider, useConfig] as const;
};
