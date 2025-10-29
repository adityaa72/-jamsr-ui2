import { AnimatePresence } from "motion/react";

import {
  Switch as SwitchPrimitive,
  SwitchContent,
  SwitchDescription,
  SwitchInput,
  SwitchLabel,
  SwitchRoot,
  SwitchThumb,
  SwitchTrack,
  SwitchWrapper,
} from "./primitive";

import type { useSwitch } from "./primitive";

export const Switch = (props: Switch.Props) => {
  const { label, description, ...restProps } = props;
  return (
    <SwitchPrimitive {...restProps}>
      <SwitchRoot>
        <SwitchWrapper>
          <SwitchInput />
          <SwitchContent>
            <SwitchLabel>{label}</SwitchLabel>
            <SwitchDescription>{description}</SwitchDescription>
          </SwitchContent>
          <AnimatePresence initial={false}>
            <SwitchTrack>
              <SwitchThumb />
            </SwitchTrack>
          </AnimatePresence>
        </SwitchWrapper>
      </SwitchRoot>
    </SwitchPrimitive>
  );
};

export namespace Switch {
  export interface Props extends useSwitch.Props {
    label?: string;
    description?: string;
  }
}
