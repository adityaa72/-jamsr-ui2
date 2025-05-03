import { UIProps } from "@jamsr-ui/utils";

export const SwitchConfig = (props: SwitchConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace SwitchConfig {
  export type Props = UIProps<"div">;
}
