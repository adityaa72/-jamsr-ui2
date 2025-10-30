import { cloneElement } from "react";

import { AnimatePresence } from "motion/react";

import {
  SwitchContent,
  SwitchDescription,
  SwitchInput,
  SwitchLabel,
  Switch as SwitchPrimitive,
  SwitchRoot,
  SwitchThumb,
  SwitchTrack,
  SwitchWrapper,
  useSwitch,
} from "./primitive";

import type { SlotsToReactNode } from "@jamsrui/utils";

import type { SwitchSlots } from "./primitive/styles";

const Slot = ({
  slot,
  children,
  Comp,
}: {
  slot?: React.ReactElement<{ children?: React.ReactNode }>;
  children?: React.ReactNode;
  Comp: React.ComponentType<{ children: React.ReactNode }>;
}) => {
  if (slot) return cloneElement(slot, {}, slot.props?.children ?? children);
  return <Comp>{children}</Comp>;
};

export const Switch = (props: Switch.Props) => {
  const { label, children, slots, ...restProps } = props;
  return (
    <SwitchPrimitive {...restProps}>
      <Slot Comp={SwitchRoot} slot={slots?.root}>
        <Slot Comp={SwitchWrapper} slot={slots?.wrapper}>
          <Slot Comp={SwitchInput} slot={slots?.input} />
          <Slot Comp={SwitchContent} slot={slots?.content}>
            <Slot Comp={SwitchLabel} slot={slots?.label}>
              {label}
            </Slot>
            <Slot Comp={SwitchDescription} slot={slots?.description}>
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
    </SwitchPrimitive>
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
