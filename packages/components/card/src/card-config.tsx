"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Card } from "./card";

export const [CardConfig, useCardConfig] =
  createConfigContext<CardConfig.Props>({
    displayName: "CardConfigContext",
  });

export namespace CardConfig {
  export interface Props extends WithGlobalConfig<Card.Props> {}
}
