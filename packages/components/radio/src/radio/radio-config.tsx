import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Radio } from ".";

export const [RadioConfig, useRadioConfig] = createConfigContext({
  displayName: "RadioConfigContext",
});
export namespace RadioConfig {
  export interface Props extends Radio.Props, GlobalConfigProps<Radio.Props> {}
}
