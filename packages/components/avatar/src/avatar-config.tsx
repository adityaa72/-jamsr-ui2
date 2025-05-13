import { createContext, use } from "react";

import type { Avatar } from "./avatar";

const AvatarContext = createContext<AvatarConfig.Props>({});
export const AvatarConfig = (props: AvatarConfig.Props) => {
  const { children, ...restProps } = props;
  return <AvatarContext value={restProps}>{children}</AvatarContext>;
};

export const useAvatarConfig = () => {
  const context = use(AvatarContext);
  return context;
};

export namespace AvatarConfig {
  export interface Props extends Avatar.Props {}
}
