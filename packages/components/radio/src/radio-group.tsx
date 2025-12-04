"use client";

import { RadioGroupContext } from "./radio-group-context";
import { RadioGroupRoot } from "./radio-group-root";
import { useRadioGroup } from "./use-radio-group";

export const RadioGroup = (props: RadioGroup.Props) => {
  const ctx = useRadioGroup(props);
  return (
    <RadioGroupContext value={ctx}>
      <RadioGroupRoot {...props} />
    </RadioGroupContext>
  );
};

export namespace RadioGroup {
  export interface Props extends useRadioGroup.Props {}
}
