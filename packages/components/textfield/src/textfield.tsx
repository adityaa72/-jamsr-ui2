"use client";
import { FieldA11yContext, useFieldA11y } from "@jamsrui/context";

import { TextFieldContext } from "./textfield-context";
import { TextfieldRoot } from "./textfield-root";
import { useTextField } from "./use-textfield";

export const TextField = (props: TextField.Props) => {
  const ctx = useTextField(props);
  const { children } = props;
  const fieldA11yCtx = useFieldA11y();
  return (
    <TextFieldContext value={ctx}>
      <FieldA11yContext value={fieldA11yCtx}>
        <TextfieldRoot>{children}</TextfieldRoot>
      </FieldA11yContext>
    </TextFieldContext>
  );
};

export namespace TextField {
  export interface Props extends useTextField.Props {}
}
