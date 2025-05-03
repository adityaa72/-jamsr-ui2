import { UIProps } from "@jamsr-ui/utils";

export const SidebarConfig = (props: SidebarConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace SidebarConfig {
  export type Props = UIProps<"div">;
}
