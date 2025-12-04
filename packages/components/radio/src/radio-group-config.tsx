"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { RadioGroup } from ".";

export const [RadioGroupConfig, useRadioGroupConfig] =
  createConfigContext<RadioGroupConfig.Props>({
    displayName: "RadioGroupConfigContext",
  });
export namespace RadioGroupConfig {
  export type Props = WithGlobalConfig<RadioGroup.Props>;
}
