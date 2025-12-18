"use client";

import { mergeConfigProps } from "@jamsrui/utils";

import { useChipConfig } from "./chip-config";
import { ChipContext } from "./chip-context";
import { ChipRoot } from "./chip-root";
import { chipVariants } from "./styles";
import { useChip } from "./use-chip";

export const Chip = (props: Chip.Props) => {
  const config = useChipConfig();
  const mergedProps = mergeConfigProps(
    chipVariants.defaultVariants,
    config,
    props
  );
  const ctx = useChip(mergedProps);

  return (
    <ChipContext value={ctx}>
      <ChipRoot>{props.children}</ChipRoot>
    </ChipContext>
  );
};

export namespace Chip {
  export interface Props extends useChip.Props {}
}
