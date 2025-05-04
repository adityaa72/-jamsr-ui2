import { UIProps } from "@jamsr-ui/utils";

export const NumberinputConfig = (props: NumberinputConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace NumberinputConfig {
  export type Props = UIProps<"div">;
}
