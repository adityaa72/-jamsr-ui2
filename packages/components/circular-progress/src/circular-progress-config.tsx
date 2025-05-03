import { UIProps } from "@jamsr-ui/utils";

export const CircularProgressConfig = (props: CircularProgressConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace CircularProgressConfig {
  export type Props = UIProps<"div">;
}
