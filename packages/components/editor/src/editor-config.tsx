"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Editor } from "./editor";

export const [EditorConfig, useEditorConfig] = createConfigContext({
  displayName: "EditorConfig",
});

export namespace EditorConfig {
  export interface Props extends WithGlobalConfig<Editor.Props> {}
}
