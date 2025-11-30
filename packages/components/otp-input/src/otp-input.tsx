"use client";

import { OtpInputContext } from "./otp-input-context";
import { OtpInputInput } from "./otp-input-input";
import { OtpInputRoot } from "./otp-input-root";
import { useOtpInput } from "./use-otp-input";

export const OtpInput = (props: OtpInput.Props) => {
  const { children, ...restProps } = props;
  const ctx = useOtpInput(restProps);
  return (
    <OtpInputContext value={ctx}>
      <OtpInputRoot>
        <OtpInputInput />
        {children}
      </OtpInputRoot>
    </OtpInputContext>
  );
};

export namespace OtpInput {
  export interface Props extends useOtpInput.Props {}
}
