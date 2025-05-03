import { UIProps } from "@jamsr-ui/utils";

export const ButtonConfig = (props: ButtonConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace ButtonConfig {
  export type Props = UIProps<"div">;
}
