import { UIProps } from "@jamsr-ui/utils";

export const SelectConfig = (props: SelectConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace SelectConfig {
  export type Props = UIProps<"div">;
}
