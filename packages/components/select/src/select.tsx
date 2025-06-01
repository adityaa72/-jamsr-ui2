import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useSelectConfig } from "./select-config";
import { SelectContext } from "./select-context";
import { useSelect } from "./use-select";

export const Select = (props: Select.Props) => {
  const config = useSelectConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useSelect(mergedProps);

  const renderElement = useRenderElement("div", {
    props,
  });
  return <SelectContext value={ctx}>{renderElement}</SelectContext>;
};

export namespace Select {
  export interface Props extends useSelect.Props {}
}
