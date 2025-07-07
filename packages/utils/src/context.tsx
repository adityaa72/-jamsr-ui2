"use client";
import { createContext, use } from "react";

import { mergeProps } from "./merge-props";

export const createConfigContext = <T extends Record<string, any>>({
  displayName,
}: {
  displayName: string;
}) => {
  const Context = createContext<T>({} as T);
  Context.displayName = displayName;
  const useConfig = () => use(Context);

  const ConfigProvider = (
    props: Omit<Partial<T>, "children"> & {
      merge?: boolean;
      children: React.ReactNode;
    }
  ) => {
    const { merge = true, ...elementProps } = props;
    const innerConfig = useConfig();
    const mergedProps = merge
      ? mergeProps(innerConfig, elementProps as unknown as T)
      : elementProps;
    const { children, ...restProps } = mergedProps;
    return <Context value={restProps as T}>{children}</Context>;
  };
  return [ConfigProvider, useConfig] as const;
};
