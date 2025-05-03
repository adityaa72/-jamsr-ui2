import { UIProps } from "@jamsr-ui/utils";

export const AlertConfig = (props: AlertConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace AlertConfig {
  export type Props = UIProps<"div">;
}
