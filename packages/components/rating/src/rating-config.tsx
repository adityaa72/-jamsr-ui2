import { UIProps } from "@jamsr-ui/utils";

export const RatingConfig = (props: RatingConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace RatingConfig {
  export type Props = UIProps<"div">;
}
