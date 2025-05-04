import { UIProps } from "@jamsr-ui/utils";

export const BreadcrumbConfig = (props: BreadcrumbConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace BreadcrumbConfig {
  export type Props = UIProps<"div">;
}
