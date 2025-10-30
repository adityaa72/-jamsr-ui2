import { cloneElement } from "react";

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

const Slot = ({
  slot,
  children,
  Comp,
  slotProps,
}: {
  slot?: React.ReactElement<{ children?: React.ReactNode }>;
  children?: React.ReactNode;
  Comp: React.ComponentType<{ children: React.ReactNode }>;
  slotProps?: Record<string, unknown>;
}) => {
  if (slot) {
    // const mergedProps = mergeProps(slot.props ?? {}, slotProps);
    return cloneElement(slot, slotProps, slot.props?.children ?? children);
  }
  return <Comp>{children}</Comp>;
};

export const Switch = (props: Switch.Props) => {
  const config = useSwitchConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const { label, children, slots, ...restProps } = mergedProps;
  const ctx = useSwitch(restProps);
  return (
    <SwitchContext value={ctx}>
      <Slot Comp={SwitchRoot} slot={slots?.root}>
        <Slot Comp={SwitchWrapper} slot={slots?.wrapper}>
          <Slot Comp={SwitchInput} slot={slots?.input} />
          <Slot Comp={SwitchContent} slot={slots?.content}>
            <Slot Comp={SwitchLabel} slot={slots?.label}>
              {label}
            </Slot>
            <Slot
              Comp={SwitchDescription}
              slot={slots?.description}
              slotProps={ctx.getDescriptionProps(
                slots?.description?.props ?? {}
              )}
            >
              {children}
            </Slot>
          </Slot>
          <AnimatePresence initial={false}>
            <Slot Comp={SwitchTrack} slot={slots?.track}>
              <Slot Comp={SwitchThumb} slot={slots?.thumb} />
            </Slot>
          </AnimatePresence>
        </Slot>
      </Slot>
    </SwitchContext>
  );

  // const RootComp = slots?.root ?? SwitchRoot;
  // return (
  //   <SwitchContext value={ctx}>
  //     <RootComp />
  //     <SwitchRoot>
  //       <SwitchWrapper>
  //         <SwitchInput />
  //         <SwitchContent>
  //           {!!label && <SwitchLabel>{label}</SwitchLabel>}
  //           {!!description && <SwitchLabel>{description}</SwitchLabel>}
  //         </SwitchContent>
  //         <AnimatePresence initial={false}>
  //           <SwitchTrack>{thumb}</SwitchTrack>
  //         </AnimatePresence>
  //       </SwitchWrapper>
  //     </SwitchRoot>
  //   </SwitchContext>
  // );
};

export namespace Switch {
  export interface Props extends useSwitch.Props {
    label?: string;
    slots?: SlotsToReactNode<SwitchSlots>;
  }
}
