import { cloneElement } from "react";

import { AnimatePresence } from "motion/react";

import {
  SwitchContent,
  SwitchDescription,
  SwitchInput,
  SwitchLabel,
  SwitchRoot,
  SwitchThumb,
  SwitchTrack,
  SwitchWrapper,
  useSwitch,
} from "./primitive";
import { SwitchContext } from "./primitive/switch-context";

import type { SlotsToReactNode } from "@jamsrui/utils";

import type { SwitchSlots } from "./primitive/styles";

const Root = ({
  root,
  children,
}: {
  root?: React.ReactElement;
  children: React.ReactNode;
}) => {
  if (root) return cloneElement(root, {}, children);
  return <SwitchRoot>{children}</SwitchRoot>;
};

const Wrapper = ({
  wrapper,
  children,
}: {
  wrapper?: React.ReactElement;
  children: React.ReactNode;
}) => {
  if (wrapper) return cloneElement(wrapper, {}, children);
  return <SwitchWrapper>{children}</SwitchWrapper>;
};

const Content = ({
  content,
  children,
}: {
  content?: React.ReactElement;
  children: React.ReactNode;
}) => {
  if (content) return cloneElement(content, {}, children);
  return <SwitchContent>{children}</SwitchContent>;
};

const Track = ({
  track,
  children,
}: {
  track?: React.ReactElement;
  children: React.ReactNode;
}) => {
  if (track) return cloneElement(track, {}, children);
  return <SwitchTrack>{children}</SwitchTrack>;
};

const Label = ({
  label,
  children,
}: {
  label?: React.ReactElement;
  children: React.ReactNode;
}) => {
  if (label) return cloneElement(label, {}, children);
  return <SwitchLabel>{children}</SwitchLabel>;
};

const Description = ({
  description,
  children,
}: {
  description?: React.ReactElement;
  children: React.ReactNode;
}) => {
  if (description) return cloneElement(description, {}, children);
  return <SwitchDescription>{children}</SwitchDescription>;
};

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
