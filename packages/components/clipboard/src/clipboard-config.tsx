import { UIProps } from "@jamsr-ui/utils";

export const ClipboardConfig = (props: ClipboardConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace ClipboardConfig {
  export type Props = UIProps<"div">;
}
