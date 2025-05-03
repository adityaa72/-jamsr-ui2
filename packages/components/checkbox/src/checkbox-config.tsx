import { UIProps } from "@jamsr-ui/utils";

export const CheckboxConfig = (props: CheckboxConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace CheckboxConfig {
  export type Props = UIProps<"div">;
}
