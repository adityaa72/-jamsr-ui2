import { UIProps } from "@jamsr-ui/utils";

export const MenuConfig = (props: MenuConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace MenuConfig {
  export type Props = UIProps<"div">;
}
