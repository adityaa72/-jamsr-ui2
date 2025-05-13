import { createContext, use } from "react";

import type { Text } from "./text";

const TextContext = createContext<TextConfig.Props>({});
export const TextConfig = (props: TextConfig.Props) => {
  const { children, ...restProps } = props;
  return <TextContext value={restProps}>{children}</TextContext>;
};

export const useTextConfig = () => {
  const context = use(TextContext);
  return context;
};

export namespace TextConfig {
  export interface Props extends Text.Props {}
}
