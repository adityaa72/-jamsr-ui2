import { UIProps } from "@jamsr-ui/utils";

export const ToastConfig = (props: ToastConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace ToastConfig {
  export type Props = UIProps<"div">;
}
