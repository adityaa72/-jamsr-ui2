import { createContext, use } from "react";

import type { Select } from "./select";

const SelectContext = createContext<SelectConfig.Props>({});
export const SelectConfig = (props: SelectConfig.Props) => {
  const { children, ...restProps } = props;
  return <SelectContext value={restProps}>{children}</SelectContext>;
};

export const useSelectConfig = () => {
  const context = use(SelectContext);
  return context;
};

export namespace SelectConfig {
  export interface Props extends Select.Props {}
}
