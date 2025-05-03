import { UIProps } from "@jamsr-ui/utils";

export const RadioConfig = (props: RadioConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace RadioConfig {
  export type Props = UIProps<"div">;
}
