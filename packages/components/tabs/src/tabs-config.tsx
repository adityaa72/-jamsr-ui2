import { UIProps } from "@jamsr-ui/utils";

export const TabsConfig = (props: TabsConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace TabsConfig {
  export type Props = UIProps<"div">;
}
