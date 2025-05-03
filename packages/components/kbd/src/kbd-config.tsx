import { UIProps } from "@jamsr-ui/utils";

export const KbdConfig = (props: KbdConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace KbdConfig {
  export type Props = UIProps<"div">;
}
