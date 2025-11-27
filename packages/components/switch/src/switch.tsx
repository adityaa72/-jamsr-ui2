"use client";

import { mergeConfigProps } from "@jamsrui/utils";

import { FieldA11yContext, useFieldA11y } from "@jamsrui/context";
import { useSwitchConfig } from "./switch-config";
import { SwitchContext } from "./switch-context";
import { SwitchRoot } from "./switch-root";
import { useSwitch } from "./use-switch";

export const Switch = (props: Switch.Props) => {
  const config = useSwitchConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useSwitch(mergedProps);
  const fieldA11yCtx = useFieldA11y();
  return (
    <SwitchContext value={ctx}>
      <SwitchRoot>
        <FieldA11yContext value={fieldA11yCtx}>
          {props.children}
        </FieldA11yContext>
      </SwitchRoot>
    </SwitchContext>
  );
};

export namespace Switch {
  export interface Props extends useSwitch.Props {}
}
