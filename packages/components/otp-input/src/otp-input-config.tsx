"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { OtpInput } from "./otp-input";

export const [OtpInputConfig, useOtpInputConfig] = createConfigContext({
  displayName: "OtpInputConfig",
});

export namespace OtpInputConfig {
  export interface Props extends WithGlobalConfig<OtpInput.Props> {}
}
