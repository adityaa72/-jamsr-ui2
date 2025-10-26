import { mergeConfigProps } from "@jamsrui/utils";
import { AnimatePresence } from "motion/react";

import { useSwitchConfig } from "./switch-config";
import { SwitchContent } from "./switch-content";
import { SwitchContext } from "./switch-context";
import { SwitchDescription } from "./switch-description";
import { SwitchErrorMessage } from "./switch-error-message";
import { SwitchInput } from "./switch-input";
import { SwitchLabel } from "./switch-label";
import { SwitchRoot } from "./switch-root";
import { SwitchThumb } from "./switch-thumb";
import { SwitchTrack } from "./switch-track";
import { SwitchWrapper } from "./switch-wrapper";
import { useSwitch } from "./use-switch";

export const Switch = (props: Switch.Props) => {
  const { children } = props;
  const config = useSwitchConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useSwitch(mergedProps);
  const { hasContent } = ctx;
  return (
    <SwitchContext value={ctx}>
      <SwitchRoot>
        <SwitchWrapper>
          <SwitchInput />
          {!!hasContent && (
            <SwitchContent>
              <SwitchLabel />
              {!!children && <SwitchDescription>{children}</SwitchDescription>}
            </SwitchContent>
          )}
          <AnimatePresence initial={false}>
            <SwitchTrack>
              <SwitchThumb />
            </SwitchTrack>
          </AnimatePresence>
        </SwitchWrapper>
        <SwitchErrorMessage />
      </SwitchRoot>
    </SwitchContext>
  );
};

export namespace Switch {
  export interface Props extends useSwitch.Props {}
}
