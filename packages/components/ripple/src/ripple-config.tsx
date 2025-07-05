import { createContext, use } from "react";

import type { Ripple } from "./ripple";

const RippleContext = createContext<RippleConfig.Props>({});
export const RippleConfig = (props: RippleConfig.Props) => {
  const { children, ...restProps } = props;
  return <RippleContext value={restProps}>{children}</RippleContext>;
};

export const useRippleConfig = () => {
  const context = use(RippleContext);
  return context;
};

export namespace RippleConfig {
  export interface Props extends Ripple.Props, GlobalConfigProps<Ripple.Props> {}
}
