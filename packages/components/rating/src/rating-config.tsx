"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Rating } from "./rating";

export const [RatingConfig, useRatingConfig] = createConfigContext({
  displayName: "RatingConfig",
});

export namespace RatingConfig {
  export interface Props
    extends Rating.Props,
      GlobalConfigProps<Rating.Props> {}
}
