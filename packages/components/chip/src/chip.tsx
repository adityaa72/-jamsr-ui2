import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { ChipCloseButton } from "./chip-close-button";
import { useChipConfig } from "./chip-config";
import { ChipContent } from "./chip-content";
import { ChipContext } from "./chip-context";
import { useChip } from "./use-chip";

export const Chip = (props: Chip.Props) => {
  const { children } = props;
  const config = useChipConfig();
  const mergedProps = mergeConfigProps(config,config, props);
  const ctx = useChip(mergedProps);
  const { getRootProps, isClosable } = ctx;

  const composedChildren = (
    <>
      <ChipContent>{children}</ChipContent>
      {!!isClosable && <ChipCloseButton />}
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps(props), { children: composedChildren }],
  });
  return <ChipContext value={ctx}>{renderElement}</ChipContext>;
};

export namespace Chip {
  export interface Props extends useChip.Props {}
}
