import { UIProps } from "@jamsr-ui/utils";

export const PaginationConfig = (props: PaginationConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace PaginationConfig {
  export type Props = UIProps<"div">;
}
