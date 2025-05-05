import { createContext, use } from "react";
import { Button } from "./button";

const ButtonContext = createContext<ButtonConfig.Props>({});
export const ButtonConfig = (props: ButtonConfig.Props) => {
  const { children, ...restProps } = props;
  return <ButtonContext value={restProps}>{children}</ButtonContext>;
};

export const useButtonConfig = () => {
  const context = use(ButtonContext);
  return context;
};

export namespace ButtonConfig {
  export interface Props extends Button.Props {}
}
