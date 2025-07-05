import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Textarea } from "./textarea";

export const [TextareaConfig, useTextareaConfig] = createConfigContext({
  displayName: "TextareaContext",
});

export namespace TextareaConfig {
  export interface Props
    extends Textarea.Props,
      GlobalConfigProps<Textarea.Props> {}
}
