import { Slot } from "@jamsrui/slot";
import { mergeConfigProps } from "@jamsrui/utils";
import { AnimatePresence } from "motion/react";

import {
  SwitchContent,
  SwitchContext,
  SwitchDescription,
  SwitchInput,
  SwitchLabel,
  SwitchRoot,
  SwitchThumb,
  SwitchTrack,
  SwitchWrapper,
  useSwitch,
} from "./primitive";
import { useSwitchConfig } from "./switch-config";

import type { SlotsToReactNode } from "@jamsrui/utils";

import type { SwitchSlots } from "./primitive/styles";

export const Switch = (props: Switch.Props) => {
  const config = useSwitchConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const { label, children, slots, ...restProps } = mergedProps;
  const ctx = useSwitch(restProps);
  return (
    <SwitchContext value={ctx}>
      <Slot slot={slots?.root}>
        <SwitchRoot>
          <Slot slot={slots?.wrapper}>
            <SwitchWrapper>
              <Slot slot={slots?.input}>
                <SwitchInput />
              </Slot>
              <Slot slot={slots?.content}>
                <SwitchContent>
                  <Slot slot={slots?.label}>
                    <SwitchLabel>{label}</SwitchLabel>
                  </Slot>
                  <Slot slot={slots?.description}>
                    <SwitchDescription>{children}</SwitchDescription>
                  </Slot>
                </SwitchContent>
              </Slot>
              <AnimatePresence initial={false}>
                <Slot slot={slots?.track}>
                  <SwitchTrack>
                    <Slot slot={slots?.thumb}>
                      <SwitchThumb />
                    </Slot>
                  </SwitchTrack>
                </Slot>
              </AnimatePresence>
            </SwitchWrapper>
          </Slot>
        </SwitchRoot>
      </Slot>
    </SwitchContext>
  );
};

export namespace Switch {
  export interface Props extends useSwitch.Props {
    label?: string;
    slots?: SlotsToReactNode<SwitchSlots>;
  }
}
