import { UIProps } from "@jamsr-ui/utils";

export const ChipConfig = (props: ChipConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace ChipConfig {
  export type Props = UIProps<"div">;
}
