"use client";
import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useSelectConfig } from "./select-config";
import { SelectContext } from "./select-context";
import { selectVariants } from "./styles";
import { useSelect } from "./use-select";

export const Select = (props: Select.Props) => {
  const config = useSelectConfig();
  const mergedProps = mergeConfigProps(
    selectVariants.defaultVariants,
    config,
    props
  );
  const ctx = useSelect(mergedProps);
  const { getRootProps } = ctx;
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return <SelectContext value={ctx}>{renderElement}</SelectContext>;
};

export namespace Select {
  export interface Props extends useSelect.Props {}
}
