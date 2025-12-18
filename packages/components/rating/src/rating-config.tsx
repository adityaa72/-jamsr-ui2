"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Rating } from "./rating";

export const [RatingConfig, useRatingConfig] = createConfigContext({
  displayName: "RatingConfig",
});

export namespace RatingConfig {
  export interface Props extends WithGlobalConfig<Rating.Props> {}
}
