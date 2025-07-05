import { createContext, use } from "react";

import type { Kbd } from "./kbd";

const KbdContext = createContext<KbdConfig.Props>({});
export const KbdConfig = (props: KbdConfig.Props) => {
  const { children, ...restProps } = props;
  return <KbdContext value={restProps}>{children}</KbdContext>;
};

export const useKbdConfig = () => {
  const context = use(KbdContext);
  return context;
};

export namespace KbdConfig {
  export interface Props extends Kbd.Props, GlobalConfigProps<Kbd.Props> {}
}
