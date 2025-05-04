import { UIProps } from "@jamsr-ui/utils";

export const ScrollareaConfig = (props: ScrollareaConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace ScrollareaConfig {
  export type Props = UIProps<"div">;
}
