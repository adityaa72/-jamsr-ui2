import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { RadioGroup } from ".";

export const [RadioGroupConfig, useRadioGroupConfig] = createConfigContext({
  displayName: "RadioGroupConfigContext",
});
export namespace RadioGroupConfig {
  export interface Props
    extends RadioGroup.Props,
      GlobalConfigProps<RadioGroup.Props> {}
}
