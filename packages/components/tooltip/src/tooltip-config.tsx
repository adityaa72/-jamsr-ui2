import { UIProps } from "@jamsr-ui/utils";

export const TooltipConfig = (props: TooltipConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace TooltipConfig {
  export type Props = UIProps<"div">;
}
