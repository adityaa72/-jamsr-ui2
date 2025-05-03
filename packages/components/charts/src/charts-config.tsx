import { UIProps } from "@jamsr-ui/utils";

export const ChartsConfig = (props: ChartsConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace ChartsConfig {
  export type Props = UIProps<"div">;
}
