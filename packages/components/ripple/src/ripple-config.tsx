import { UIProps } from "@jamsr-ui/utils";

export const RippleConfig = (props: RippleConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace RippleConfig {
  export type Props = UIProps<"div">;
}
