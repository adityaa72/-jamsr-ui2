import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Link } from "./link";

export const [LinkConfig, useLinkConfig] = createConfigContext({
  displayName: "LinkConfig",
});

export namespace LinkConfig {
  export interface Props extends Link.Props, GlobalConfigProps<Link.Props> {}
}
