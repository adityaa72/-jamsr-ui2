import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { NumberInput } from "./number-input";

export const [NumberInputConfig, useNumberInputConfig] = createConfigContext({
  displayName: "NumberInputConfig",
});

export namespace NumberInputConfig {
  export interface Props
    extends NumberInput.Props,
      GlobalConfigProps<NumberInput.Props> {}
}
