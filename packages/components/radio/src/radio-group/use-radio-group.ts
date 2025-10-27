import { useCallback } from "react";

import { mapPropsVariants } from "@jamsrui/utils";

import { radioGroupVariant } from "../styles";

import type { PropGetter, SlotsToClassNames } from "@jamsrui/utils";

import type { RadioGroupContent } from "./radio-group-content";
import type { RadioGroupRoot } from "./radio-group-root";
import type { RadioGroupSlots } from "../styles";
import type { RadioGroupDescription } from "./radio-group-description";
import type { RadioGroupErrorMessage } from "./radio-group-error-message";
import type { RadioGroupLabel } from "./radio-group-label";

export const useRadioGroup = (props: useRadioGroup.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    radioGroupVariant.variantKeys
  );

  const {
    label,
    value,
    classNames,
    defaultValue,
    errorMessage,
    onValueChange,
    children,
  } = $props;

  const styles = radioGroupVariant(variantProps);

  const getRootProps: PropGetter<RadioGroupRoot.Props> = useCallback(
    (props) => ({ ...props }),
    []
  );

  const getContentProps: PropGetter<RadioGroupContent.Props> = useCallback(
    (props) => ({ ...props }),
    []
  );

  const getLabelProps: PropGetter<RadioGroupLabel.Props> = useCallback(
    (props) => ({ ...props }),
    []
  );

  const getDescriptionProps: PropGetter<RadioGroupDescription.Props> =
    useCallback((props) => ({ ...props }), []);

  const getErrorMessageProps: PropGetter<RadioGroupErrorMessage.Props> =
    useCallback((props) => ({ ...props }), []);

  return {
    label,
    children,
    getRootProps,
    getContentProps,
    getLabelProps: getLabelProps,
    getDescriptionProps,
    getErrorMessageProps,
  };
};

export namespace useRadioGroup {
  export interface Props {
    label?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    errorMessage?: string;
    classNames?: SlotsToClassNames<RadioGroupSlots>;
    children?: React.ReactNode;
  }
}
