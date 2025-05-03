import { UIProps } from "@jamsr-ui/utils";

export const DrawerConfig = (props: DrawerConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace DrawerConfig {
  export type Props = UIProps<"div">;
}
