import { UIProps } from "@jamsr-ui/utils";

export const IconButtonConfig = (props: IconButtonConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace IconButtonConfig {
  export type Props = UIProps<"div">;
}
