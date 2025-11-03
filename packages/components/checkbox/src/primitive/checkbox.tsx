import { mergeConfigProps } from "@jamsrui/utils";

import { useCheckboxConfig } from "./checkbox-config";
import { CheckboxContext } from "./checkbox-context";
import { useCheckbox } from "./use-checkbox";

export const Checkbox = (props: Checkbox.Props) => {
  const config = useCheckboxConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useCheckbox(mergedProps);
  return <CheckboxContext value={ctx}>{props.children}</CheckboxContext>;
};

export namespace Checkbox {
  export interface Props extends useCheckbox.Props {}
}
