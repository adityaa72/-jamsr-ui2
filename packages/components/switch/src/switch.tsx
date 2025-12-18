"use client";

import { FieldA11yContext, useFieldA11y } from "@jamsrui/context";
import { mergeConfigProps } from "@jamsrui/utils";

import { switchVariants } from "./styles";
import { useSwitchConfig } from "./switch-config";
import { SwitchContext } from "./switch-context";
import { SwitchRoot } from "./switch-root";
import { useSwitch } from "./use-switch";

export const Switch = (props: Switch.Props) => {
  const config = useSwitchConfig();
  const mergedProps = mergeConfigProps(
    switchVariants.defaultVariants,
    config,
    props
  );
  const ctx = useSwitch(mergedProps);
  const fieldA11yCtx = useFieldA11y();
  return (
    <FieldA11yContext value={fieldA11yCtx}>
      <SwitchContext value={ctx}>
        <SwitchRoot>{props.children}</SwitchRoot>
      </SwitchContext>
    </FieldA11yContext>
  );
};

export namespace Switch {
  export interface Props extends useSwitch.Props {}
}
