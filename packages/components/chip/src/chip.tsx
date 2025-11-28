"use client";

import { mergeConfigProps } from "@jamsrui/utils";

import { useChipConfig } from "./chip-config";
import { ChipContext } from "./chip-context";
import { ChipRoot } from "./chip-root";
import { useChip } from "./use-chip";

export const Chip = (props: Chip.Props) => {
  const config = useChipConfig();
  const mergedProps = mergeConfigProps(config, config, props);
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
