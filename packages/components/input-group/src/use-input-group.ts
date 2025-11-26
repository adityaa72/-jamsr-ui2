"use client";

import { useCallback, useMemo } from "react";

import {
  useFocus,
  useFocusVisible,
  useHover,
  useMergeRefs,
} from "@jamsrui/hooks";
import { cn, dataAttr, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { inputVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import { InputGroupPrefix } from "./input-group-prefix";
import { InputGroupRoot } from "./input-group-root";
import type { InputGroupSuffix } from "./input-group-suffix";
import type { InputVariantProps } from "./styles";

export const useInputGroup = (props: useInputGroup.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    inputVariants.variantKeys
  );
  const { ref, className, ...elementProps } = $props;

  const styles = inputVariants(variantProps);
  const isInvalid = variantProps.isInvalid;
  const isDisabled = false;

  const { isFocused, ref: focusRef } = useFocus<HTMLInputElement>({
    isDisabled,
  });
  const { isFocusVisible, ref: focusVisibleRef } =
    useFocusVisible<HTMLInputElement>({
      isDisabled,
    });
  const { isHovered, ref: hoverRef } = useHover<HTMLDivElement>({
    isDisabled,
  });
  const inputRefs = useMergeRefs([ref, focusRef, focusVisibleRef, hoverRef]);

  const handleOnMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    // return if direct clicked on input, textarea
    if (target.closest("input, textarea")) {
      return;
    }

    const input = e.currentTarget.querySelector<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");
    if (input) {
      input.focus();
      e.preventDefault();
    }
  };

  const getRootProps: PropGetter<InputGroupRoot.Props> = useCallback(
    (props) => ({
      "data-component": dataAttrDev("input-group"),
      "data-slot": dataAttrDev("root"),
      "data-focused": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hovered": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      onMouseDown: handleOnMouseDown,
      ...elementProps,
      className: styles.root({
        className: cn(props.className),
      }),
    }),
    [isDisabled, isFocusVisible, isFocused, isHovered, isInvalid, styles]
  );

  const getPrefixProps: PropGetter<InputGroupPrefix.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("prefix"),
      ...props,
      className: styles.prefix({
        className: cn(props.className),
      }),
    }),
    [styles]
  );

  const getSuffixProps: PropGetter<InputGroupSuffix.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("suffix"),
      ...props,
      className: styles.suffix({
        className: cn(props.className),
      }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getPrefixProps,
      getSuffixProps,
    }),
    [getRootProps, getPrefixProps, getSuffixProps]
  );
};

export namespace useInputGroup {
  export interface Props extends UIProps<"div">, InputVariantProps {}
}
