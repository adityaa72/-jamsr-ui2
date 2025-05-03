import { UIProps } from "@jamsr-ui/utils";

export const HeaderConfig = (props: HeaderConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace HeaderConfig {
  export type Props = UIProps<"div">;
}
