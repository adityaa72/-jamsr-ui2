import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { selectVariants } from "./styles";

import type { Placement } from "@floating-ui/react";
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { SelectContent } from "./select-content";
import type { SelectEndContent } from "./select-end-content";
import type { SelectErrorMessage } from "./select-error-message";
import type { SelectHelperText } from "./select-helper-text";
import type { SelectIndicator } from "./select-indicator";
import type { SelectInnerWrapper } from "./select-inner-wrapper";
import type { SelectItem } from "./select-item";
import type { SelectLabel } from "./select-label";
import type { SelectMainWrapper } from "./select-main-wrapper";
import type { SelectPlaceholder } from "./select-placeholder";
import type { SelectPopover } from "./select-popover";
import type { SelectStartContent } from "./select-start-content";
import type { SelectTrigger } from "./select-trigger";
import type { SelectValue } from "./select-value";
import type { SelectSlots, SelectVariantProps } from "./styles";

export const useSelect = (props: useSelect.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    selectVariants.variantKeys
  );

  const {
    label,
    children,
    onValueChange,
    defaultValue,
    value: propValue,
    placeholder = "Select",
    classNames,
    onOpenChange,
    defaultOpen,
    isOpen: isPropOpen,
    isMultiple = false,
    helperText,
    renderValue,
    placement = "bottom-start",
    startContent,
    endContent,
    isDisabled: propIsDisabled,
    returnFocus = true,
    disableTypeahead = false,
    errorMessage,
    slotProps,
    ...elementProps
  } = $props;

  const styles = selectVariants(variantProps);

  const getRootProps: PropGetter<useSelect.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-component": dataAttrDev("select"),
      "data-slot": dataAttrDev("root"),
      className: styles.root({
        className: cn(classNames?.root, elementProps.className),
      }),
    }),
    [classNames?.root, elementProps, styles]
  );

  const getValueProps: PropGetter<SelectValue.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.value),
      "data-slot": dataAttrDev("value"),
      className: styles.value({
        className: cn(
          slotProps?.value?.className,
          classNames?.value,
          props.className
        ),
      }),
    }),
    [classNames?.value, slotProps?.value, styles]
  );

  const getPlaceholderProps: PropGetter<SelectPlaceholder.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.placeholder),
      "data-slot": dataAttrDev("placeholder"),
      className: styles.placeholder({
        className: cn(
          slotProps?.placeholder?.className,
          classNames?.placeholder,
          props.className
        ),
      }),
    }),
    [classNames?.placeholder, slotProps?.placeholder, styles]
  );

  const getMainWrapperProps: PropGetter<SelectMainWrapper.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.mainWrapper),
      "data-slot": dataAttrDev("mainWrapper"),
      className: styles.mainWrapper({
        className: cn(
          slotProps?.mainWrapper?.className,
          classNames?.mainWrapper,
          props.className
        ),
      }),
    }),
    [classNames?.mainWrapper, slotProps?.mainWrapper, styles]
  );

  const getInnerWrapperProps: PropGetter<SelectInnerWrapper.Props> =
    useCallback(
      (props) => ({
        ...mergeProps(props, slotProps?.innerWrapper),
        "data-slot": dataAttrDev("innerWrapper"),
        className: styles.innerWrapper({
          className: cn(
            slotProps?.innerWrapper?.className,
            classNames?.innerWrapper,
            props.className
          ),
        }),
      }),
      [classNames?.innerWrapper, slotProps?.innerWrapper, styles]
    );

  const getLabelProps: PropGetter<SelectLabel.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.label),
      "data-slot": dataAttrDev("label"),
      className: styles.label({
        className: cn(
          slotProps?.label?.className,
          classNames?.label,
          props.className
        ),
      }),
    }),
    [classNames?.label, slotProps?.label, styles]
  );

  const getTriggerProps: PropGetter<SelectTrigger.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.trigger),
      "data-slot": dataAttrDev("trigger"),
      className: styles.trigger({
        className: cn(
          slotProps?.trigger?.className,
          classNames?.trigger,
          props.className
        ),
      }),
    }),
    [classNames?.trigger, slotProps?.trigger, styles]
  );

  const getHelperTextProps: PropGetter<SelectHelperText.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.helperText),
      "data-slot": dataAttrDev("helperText"),
      className: styles.helperText({
        className: cn(
          slotProps?.helperText?.className,
          classNames?.helperText,
          props.className
        ),
      }),
    }),
    [classNames?.helperText, slotProps?.helperText, styles]
  );

  const getErrorMessageProps: PropGetter<SelectErrorMessage.Props> =
    useCallback(
      (props) => ({
        ...mergeProps(props, slotProps?.errorMessage),
        "data-slot": dataAttrDev("errorMessage"),
        className: styles.errorMessage({
          className: cn(
            slotProps?.errorMessage?.className,
            classNames?.errorMessage,
            props.className
          ),
        }),
      }),
      [classNames?.errorMessage, slotProps?.errorMessage, styles]
    );

  const getIndicatorProps: PropGetter<SelectIndicator.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.indicator),
      "data-slot": dataAttrDev("indicator"),
      className: styles.indicator({
        className: cn(
          slotProps?.indicator?.className,
          classNames?.indicator,
          props.className
        ),
      }),
    }),
    [classNames?.indicator, slotProps?.indicator, styles]
  );

  const getContentProps: PropGetter<SelectContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.content),
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

  const getStartContentProps: PropGetter<SelectStartContent.Props> =
    useCallback(
      (props) => ({
        ...mergeProps(props, slotProps?.startContent),
        "data-slot": dataAttrDev("startContent"),
        className: styles.startContent({
          className: cn(
            slotProps?.startContent?.className,
            classNames?.startContent,
            props.className
          ),
        }),
      }),
      [classNames?.startContent, slotProps?.startContent, styles]
    );

  const getPopoverProps: PropGetter<SelectPopover.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.popover),
      "data-slot": dataAttrDev("popover"),
      className: styles.popover({
        className: cn(
          slotProps?.popover?.className,
          classNames?.popover,
          props.className
        ),
      }),
    }),
    [classNames?.popover, slotProps?.popover, styles]
  );

  const getEndContentProps: PropGetter<SelectEndContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.endContent),
      "data-slot": dataAttrDev("endContent"),
      className: styles.endContent({
        className: cn(
          slotProps?.endContent?.className,
          classNames?.endContent,
          props.className
        ),
      }),
    }),
    [classNames?.endContent, slotProps?.endContent, styles]
  );

  const getSelectItemProps: PropGetter<SelectItem.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, slotProps?.selectItem),
      "data-slot": dataAttrDev("selectItem"),
      className: styles.selectItem({
        className: cn(
          slotProps?.selectItem?.className,
          classNames?.selectItem,
          props.className
        ),
      }),
    }),
    [classNames?.selectItem, slotProps?.selectItem, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getMainWrapperProps,
      getInnerWrapperProps,
      getLabelProps,
      getTriggerProps,
      getHelperTextProps,
      getErrorMessageProps,
      getIndicatorProps,
      getContentProps,
      getStartContentProps,
      getPopoverProps,
      getEndContentProps,
      getSelectItemProps,
      getPlaceholderProps,
      getValueProps,
    }),
    [
      getContentProps,
      getEndContentProps,
      getErrorMessageProps,
      getHelperTextProps,
      getIndicatorProps,
      getInnerWrapperProps,
      getLabelProps,
      getMainWrapperProps,
      getPlaceholderProps,
      getPopoverProps,
      getRootProps,
      getSelectItemProps,
      getStartContentProps,
      getTriggerProps,
      getValueProps,
    ]
  );
};

export namespace useSelect {
  export interface Props extends UIProps<"div">, SelectVariantProps {
    placement?: Placement;
    label?: string;
    placeholder?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (value: boolean) => void;
    isMultiple?: boolean;
    className?: string;
    errorMessage?: string;
    classNames?: SlotsToClassNames<SelectSlots>;
    helperText?: React.ReactNode;
    renderValue?: (value: string[]) => React.ReactNode;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    returnFocus?: boolean;
    disableTypeahead?: boolean;
    slotProps?: {
      value?: SelectValue.Props;
      placeholder?: SelectPlaceholder.Props;
      mainWrapper?: SelectMainWrapper.Props;
      innerWrapper?: SelectInnerWrapper.Props;
      label?: SelectLabel.Props;
      trigger?: SelectTrigger.Props;
      helperText?: SelectHelperText.Props;
      errorMessage?: SelectErrorMessage.Props;
      indicator?: SelectIndicator.Props;
      popover?: SelectPopover.Props;
      content?: SelectContent.Props;
      startContent?: SelectStartContent.Props;
      endContent?: SelectEndContent.Props;
      selectItem?: SelectItem.Props;
    };
  }
}
