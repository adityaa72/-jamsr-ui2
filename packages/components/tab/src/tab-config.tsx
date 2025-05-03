import { UIProps } from "@jamsr-ui/utils";

export const TabConfig = (props: TabConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace TabConfig {
  export type Props = UIProps<"div">;
}
