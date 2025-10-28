import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { DateInput } from "./date-input";

export const [DateInputConfig, useDateInputConfig] =
  createConfigContext<DateInputConfig.Props>({
    displayName: "DateInputConfig",
  });

export namespace DateInputConfig {
  export type Props = WithGlobalConfig<DateInput.Props>;
}
