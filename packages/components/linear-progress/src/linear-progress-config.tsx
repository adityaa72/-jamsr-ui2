import { UIProps } from "@jamsr-ui/utils";

export const LinearProgressConfig = (props: LinearProgressConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace LinearProgressConfig {
  export type Props = UIProps<"div">;
}
