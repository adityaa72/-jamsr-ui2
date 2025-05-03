import { UIProps } from "@jamsr-ui/utils";

export const TableConfig = (props: TableConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace TableConfig {
  export type Props = UIProps<"div">;
}
