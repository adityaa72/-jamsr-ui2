import { createContext, use } from "react";
import { OtpInput } from "./otp-input";

const OtpInputContext = createContext<OtpInputConfig.Props>({});
export const OtpInputConfig = (props: OtpInputConfig.Props) => {
  const { children, ...restProps } = props;
  return <OtpInputContext value={restProps}>{children}</OtpInputContext>;
};

export const useOtpInputConfig = () => {
  const context = use(OtpInputContext);
  return context;
};

export namespace OtpInputConfig {
  export interface Props extends OtpInput.Props {}
}
