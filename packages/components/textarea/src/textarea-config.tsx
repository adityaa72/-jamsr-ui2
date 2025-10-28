import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Textarea } from "./textarea";

export const [TextareaConfig, useTextareaConfig] = createConfigContext({
  displayName: "TextareaContext",
});

export namespace TextareaConfig {
  export type Props = WithGlobalConfig<Textarea.Props>;
}
