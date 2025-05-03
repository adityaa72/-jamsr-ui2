import { UIProps } from "@jamsr-ui/utils";

export const InputConfig = (props: InputConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace InputConfig {
  export type Props = UIProps<"div">;
}
