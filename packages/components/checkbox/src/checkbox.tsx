import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useCheckboxConfig } from "./checkbox-config";
import { CheckboxContent } from "./checkbox-content";
import { CheckboxContext } from "./checkbox-context";
import { CheckboxDescription } from "./checkbox-description";
import { CheckboxErrorMessage } from "./checkbox-errror-message";
import { CheckboxHelperText } from "./checkbox-helper-text";
import { CheckboxInput } from "./checkbox-input";
import { CheckboxLabel } from "./checkbox-label";
import { CheckboxTrigger } from "./checkbox-trigger";
import { CheckboxWrapper } from "./checkbox-wrapper";
import { useCheckbox } from "./use-checkbox";

export const Checkbox = (props: Checkbox.Props) => {
  const config = useCheckboxConfig();
  const mergedProps = mergeConfigProps(config,config, props);
  const ctx = useCheckbox(mergedProps);
  const { getRootProps } = ctx;

  const composedChildren = (
    <>
      <CheckboxWrapper>
        <CheckboxLabel />
        <CheckboxHelperText />
        <CheckboxContent></CheckboxContent>
        <CheckboxDescription></CheckboxDescription>
        <CheckboxErrorMessage />
        <CheckboxInput />
        <CheckboxTrigger />
      </CheckboxWrapper>
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return <CheckboxContext value={ctx}>{renderElement}</CheckboxContext>;
};

export namespace Checkbox {
  export interface Props extends useCheckbox.Props {}
}
