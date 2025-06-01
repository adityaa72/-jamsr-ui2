import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { chipVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { Chip } from "./chip";
import type { ChipCloseButton } from "./chip-close-button";
import type { ChipContent } from "./chip-content";
import type { ChipDot } from "./chip-dot";
import type { ChipSlots, ChipVariantsProps } from "./styles";

export const useChip = (props: useChip.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    chipVariants.variantKeys
  );

  const {
    startContent,
    endContent,
    onClose,
    classNames,
    slotProps,
    ...elementProps
  } = $props;
  const styles = chipVariants(variantProps);

  const isClosable = typeof onClose === "function";
  const isDotVariant = variantProps.variant === "dot";

  const getRootProps: PropGetter<Chip.Props> = useCallback(
    () => ({
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("chip"),
      ...elementProps,
      className: styles.root({
        className: cn(classNames?.root, elementProps.className),
      }),
    }),
    [classNames?.root, elementProps, styles]
  );

  const getContentProps: PropGetter<ChipContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.content, props),
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(
          slotProps?.content?.className,
          classNames?.content,
          props.className
        ),
      }),
    }),
    [classNames?.content, slotProps?.content, styles]
  );

  const getCloseButtonProps: PropGetter<ChipCloseButton.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.closeButton, props, {
        onClick: onClose,
      }),
      "data-slot": dataAttrDev("close-button"),
      className: styles.closeButton({
        className: cn(
          slotProps?.closeButton?.className,
          classNames?.closeButton,
          props.className
        ),
      }),
    }),
    [classNames?.closeButton, onClose, slotProps?.closeButton, styles]
  );

  const getDotProps: PropGetter<ChipDot.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.dot, props),
      "data-slot": dataAttrDev("dot"),
      className: styles.dot({
        className: cn(
          slotProps?.dot?.className,
          classNames?.dot,
          props.className
        ),
      }),
    }),
    [classNames?.dot, slotProps?.dot, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getContentProps,
      getCloseButtonProps,
      getDotProps,
      startContent,
      endContent,
      isClosable,
      isDotVariant,
    }),
    [
      endContent,
      getCloseButtonProps,
      getContentProps,
      getDotProps,
      getRootProps,
      startContent,
      isClosable,
      isDotVariant,
    ]
  );
};
export namespace useChip {
  export interface Props extends UIProps<"div">, ChipVariantsProps {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    onClose?: () => void;
    classNames?: SlotsToClassNames<ChipSlots>;
    slotProps?: {
      content?: ChipContent.Props;
      closeButton?: ChipCloseButton.Props;
      dot?: ChipDot.Props;
    };
  }
}
