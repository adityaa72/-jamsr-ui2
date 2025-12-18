"use client";
import { FieldA11yContext, useFieldA11y } from "@jamsrui/context";
import { mergeConfigProps } from "@jamsrui/utils";

import { useCheckboxConfig } from "./checkbox-config";
import { CheckboxContext } from "./checkbox-context";
import { CheckboxRoot } from "./checkbox-root";
import { checkboxVariants } from "./styles";
import { useCheckbox } from "./use-checkbox";

export const Checkbox = (props: Checkbox.Props) => {
  const config = useCheckboxConfig();
  const mergedProps = mergeConfigProps(
    checkboxVariants.defaultVariants,
    config,
    props
  );
  const ctx = useCheckbox(mergedProps);
  const fieldAllyCtx = useFieldA11y();
  return (
    <CheckboxContext value={ctx}>
      <FieldA11yContext value={fieldAllyCtx}>
        <CheckboxRoot>{props.children}</CheckboxRoot>
      </FieldA11yContext>
    </CheckboxContext>
  );
};

export namespace Checkbox {
  export interface Props extends useCheckbox.Props {}
}
