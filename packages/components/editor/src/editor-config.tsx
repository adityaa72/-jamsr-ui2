import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Editor } from "./editor";

export const [EditorConfig, useEditorConfig] = createConfigContext({
  displayName: "EditorConfig",
});

export namespace EditorConfig {
  export interface Props
    extends Editor.Props,
      GlobalConfigProps<Editor.Props> {}
}
