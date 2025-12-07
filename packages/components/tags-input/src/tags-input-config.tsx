"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { TagsInput } from "./tags-input";

export const [TagsInputConfig, useTagsInputConfig] = createConfigContext({
  displayName: "TagsInputConfig",
});

export namespace TagsInputConfig {
  export interface Props
    extends TagsInput.Props,
      GlobalConfigProps<TagsInput.Props> {}
}
