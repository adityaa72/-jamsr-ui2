import { UIProps } from "@jamsr-ui/utils";

export const DividerConfig = (props: DividerConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace DividerConfig {
  export type Props = UIProps<"div">;
}
