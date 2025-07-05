import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Toast } from "./toast";

export const [ToastConfig, useToastConfig] = createConfigContext({
  displayName: "ToastContext",
});

export namespace ToastConfig {
  export interface Props extends Toast.Props, GlobalConfigProps<Toast.Props> {}
}
