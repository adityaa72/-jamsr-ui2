import { UIProps } from "@jamsr-ui/utils";

export const OtpInputConfig = (props: OtpInputConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace OtpInputConfig {
  export type Props = UIProps<"div">;
}
