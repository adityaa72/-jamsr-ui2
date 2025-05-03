import { UIProps } from "@jamsr-ui/utils";

export const DialogConfig = (props: DialogConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace DialogConfig {
  export type Props = UIProps<"div">;
}
