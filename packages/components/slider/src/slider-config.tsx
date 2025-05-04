import { UIProps } from "@jamsr-ui/utils";

export const SliderConfig = (props: SliderConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace SliderConfig {
  export type Props = UIProps<"div">;
}
