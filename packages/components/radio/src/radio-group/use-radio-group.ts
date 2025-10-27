import { useCallback, useId } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { cn, mapPropsVariants } from "@jamsrui/utils";

import { radioGroupVariant } from "../styles";

import type { PropGetter, SlotsToClassNames } from "@jamsrui/utils";

import type { RadioGroupSlots } from "../styles";
import type { RadioGroupContent } from "./radio-group-content";
import type { RadioGroupDescription } from "./radio-group-description";
import type { RadioGroupErrorMessage } from "./radio-group-error-message";
import type { RadioGroupLabel } from "./radio-group-label";
import type { RadioGroupRoot } from "./radio-group-root";

export const useRadioGroup = (props: useRadioGroup.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    radioGroupVariant.variantKeys
  );

  const {
    label,
    value: propValue,
    classNames,
    defaultValue,
    errorMessage,
    onValueChange,
    children,
    name,
  } = $props;

  const styles = radioGroupVariant(variantProps);
  const inputNameId = useId();
  const inputName = name ?? inputNameId;

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    prop: propValue,
    onChange: onValueChange,
  });

  const getRootProps: PropGetter<RadioGroupRoot.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.root({
        className: cn(classNames?.root, props.className),
      }),
    }),
    [classNames?.root, styles]
  );

  const getContentProps: PropGetter<RadioGroupContent.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.content({
        className: cn(classNames?.content, props.className),
      }),
    }),
    [classNames?.content, styles]
  );

  const getLabelProps: PropGetter<RadioGroupLabel.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.label({
        className: cn(classNames?.label, props.className),
      }),
    }),
    [classNames?.label, styles]
  );

  const getDescriptionProps: PropGetter<RadioGroupDescription.Props> =
    useCallback(
      (props) => ({
        ...props,
        className: styles.description({
          className: cn(classNames?.description, props.className),
        }),
      }),
      [classNames?.description, styles]
    );

  const getErrorMessageProps: PropGetter<RadioGroupErrorMessage.Props> =
    useCallback(
      (props) => ({
        ...props,
        className: styles.errorMessage({
          className: cn(classNames?.errorMessage, props.className),
        }),
      }),
      [classNames?.errorMessage, styles]
    );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return {
    label,
    getRootProps,
    getContentProps,
    getLabelProps,
    getDescriptionProps,
    getErrorMessageProps,
    handleInputChange,
    value,
    errorMessage,
    children,
    name: inputName,
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
    name?: string;
  }
}
