import { createContext, use } from "react";
import { Breadcrumb } from "./breadcrumb";

const BreadcrumbContext = createContext<BreadcrumbConfig.Props>({});
export const BreadcrumbConfig = (props: BreadcrumbConfig.Props) => {
  const { children, ...restProps } = props;
  return <BreadcrumbContext value={restProps}>{children}</BreadcrumbContext>;
};

export const useBreadcrumbConfig = () => {
  const context = use(BreadcrumbContext);
  return context;
};

export namespace BreadcrumbConfig {
  export interface Props extends Breadcrumb.Props {}
}
