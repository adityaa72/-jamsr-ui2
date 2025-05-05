import { createContext, use } from "react";
import { IconButton } from "./icon-button";

const IconButtonContext = createContext<IconButtonConfig.Props>({});
export const IconButtonConfig = (props: IconButtonConfig.Props) => {
  const { children, ...restProps } = props;
  return <IconButtonContext value={restProps}>{children}</IconButtonContext>;
};

export const useIconButtonConfig = () => {
  const context = use(IconButtonContext);
  return context;
};

export namespace IconButtonConfig {
  export interface Props extends IconButton.Props {}
}
