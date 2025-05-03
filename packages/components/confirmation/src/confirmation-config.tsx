import { UIProps } from "@jamsr-ui/utils";

export const ConfirmationConfig = (props: ConfirmationConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace ConfirmationConfig {
  export type Props = UIProps<"div">;
}
