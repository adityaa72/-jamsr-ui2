import { createContext, use } from "react";
import { Pagination } from "./pagination";

const PaginationContext = createContext<PaginationConfig.Props>({});
export const PaginationConfig = (props: PaginationConfig.Props) => {
  const { children, ...restProps } = props;
  return <PaginationContext value={restProps}>{children}</PaginationContext>;
};

export const usePaginationConfig = () => {
  const context = use(PaginationContext);
  return context;
};

export namespace PaginationConfig {
  export interface Props extends Pagination.Props {}
}
