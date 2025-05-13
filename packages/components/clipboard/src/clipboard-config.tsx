import { createContext, use } from "react";

import type { Clipboard } from "./clipboard";

const ClipboardContext = createContext<ClipboardConfig.Props>({});
export const ClipboardConfig = (props: ClipboardConfig.Props) => {
  const { children, ...restProps } = props;
  return <ClipboardContext value={restProps}>{children}</ClipboardContext>;
};

export const useClipboardConfig = () => {
  const context = use(ClipboardContext);
  return context;
};

export namespace ClipboardConfig {
  export interface Props extends Clipboard.Props {}
}
