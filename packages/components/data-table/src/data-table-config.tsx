import { UIProps } from "@jamsr-ui/utils";

export const DataTableConfig = (props: DataTableConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace DataTableConfig {
  export type Props = UIProps<"div">;
}
