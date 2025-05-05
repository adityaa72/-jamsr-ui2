import { createContext, use } from "react";
import { Checkbox } from "./checkbox";

const CheckboxContext = createContext<CheckboxConfig.Props>({});
export const CheckboxConfig = (props: CheckboxConfig.Props) => {
  const { children, ...restProps } = props;
  return <CheckboxContext value={restProps}>{children}</CheckboxContext>;
};

export const useCheckboxConfig = () => {
  const context = use(CheckboxContext);
  return context;
};

export namespace CheckboxConfig {
  export interface Props extends Checkbox.Props {}
}
