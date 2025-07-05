import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Card } from "./card";

export const [CardConfig, useCardConfig] =
  createConfigContext<CardConfig.Props>({
    displayName: "CardConfigContext",
  });

export namespace CardConfig {
  export interface Props extends Card.Props, GlobalConfigProps<Card.Props> {}
}
