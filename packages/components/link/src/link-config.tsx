"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Link } from "./link";

export const [LinkConfig, useLinkConfig] = createConfigContext({
  displayName: "LinkConfig",
});

export namespace LinkConfig {
  export interface Props extends WithGlobalConfig<Link.Props> {}
}
