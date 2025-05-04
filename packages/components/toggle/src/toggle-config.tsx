import { UIProps } from "@jamsr-ui/utils";

export const ToggleConfig = (props: ToggleConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace ToggleConfig {
  export type Props = UIProps<"div">;
}
