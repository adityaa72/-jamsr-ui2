"use client";

import { FieldA11yContext, useFieldA11y } from "@jamsrui/context";
import { RadioContext } from "./radio-context";
import { RadioRoot } from "./radio-root";
import { useRadio } from "./use-radio";

const RadioInner = (props: Radio.Props) => {
  const ctx = useRadio(props);
  return (
    <RadioContext value={ctx}>
      <RadioRoot {...props} />
    </RadioContext>
  );
};

export const Radio = (props: Radio.Props) => {
  const fieldA11yCtx = useFieldA11y();
  return (
    <FieldA11yContext value={fieldA11yCtx}>
      <RadioInner {...props} />
    </FieldA11yContext>
  );
};

export namespace Radio {
  export interface Props extends useRadio.Props {}
}
