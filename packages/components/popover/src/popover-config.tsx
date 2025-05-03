import { UIProps } from "@jamsr-ui/utils";

export const PopoverConfig = (props: PopoverConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace PopoverConfig {
  export type Props = UIProps<"div">;
}
