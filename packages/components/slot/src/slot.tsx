import { cloneElement } from "react";

export const Slot = (props: Slot.Props) => {
  const { slot, children, slotProps } = props;
  if (slot) {
    return cloneElement(
      slot,
      slotProps,
      slot.props?.children ?? children?.props?.children
    );
  }
  return <>{children}</>;
};

export namespace Slot {
  export interface Props {
    slot: React.ReactElement<{ children?: React.ReactNode }> | undefined;
    children?: React.ReactElement<{ children?: React.ReactNode }>;
    slotProps?: Record<string, unknown>;
  }
}
