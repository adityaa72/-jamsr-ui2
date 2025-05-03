import { UIProps } from "@jamsr-ui/utils";

export const CollapsibleConfig = (props: CollapsibleConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace CollapsibleConfig {
  export type Props = UIProps<"div">;
}
