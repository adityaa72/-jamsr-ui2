import { createContext, use } from "react";
import { Confirmation } from "./confirmation";

const ConfirmationContext = createContext<ConfirmationConfig.Props>({});
export const ConfirmationConfig = (props: ConfirmationConfig.Props) => {
  const { children, ...restProps } = props;
  return <ConfirmationContext value={restProps}>{children}</ConfirmationContext>;
};

export const useConfirmationConfig = () => {
  const context = use(ConfirmationContext);
  return context;
};

export namespace ConfirmationConfig {
  export interface Props extends Confirmation.Props {}
}
