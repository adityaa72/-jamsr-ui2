import { UIProps } from "@jamsr-ui/utils";

export const SkeletonConfig = (props: SkeletonConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace SkeletonConfig {
  export type Props = UIProps<"div">;
}
