"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { OtpInput } from "./otp-input";

export const [OtpInputConfig, useOtpInputConfig] = createConfigContext({
  displayName: "OtpInputConfig",
});

export namespace OtpInputConfig {
  export interface Props
    extends OtpInput.Props,
      GlobalConfigProps<OtpInput.Props> {}
}
