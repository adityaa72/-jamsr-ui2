import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Input } from "./input";

export const [InputConfig, useInputConfig] = createConfigContext({
  displayName: "InputConfig",
});

export namespace InputConfig {
  export interface Props extends Input.Props, GlobalConfigProps<Input.Props> {}
}
