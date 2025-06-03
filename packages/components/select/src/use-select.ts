import {
  Children,
  isValidElement,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  autoUpdate,
  flip,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";
import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { selectVariants } from "./styles";

import type {
  FloatingFocusManagerProps,
  FloatingList,
  Placement,
} from "@floating-ui/react";
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";
import type { ComponentProps } from "react";

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
    isOpen: isOpenProp,
    isMultiple = false,
    helperText,
    renderValue,
    placement = "bottom-start",
    startContent,
    endContent,
    isDisabled,
    returnFocus = true,
    disableTypeahead = false,
    errorMessage,
    slotProps,
    ...elementProps
  } = $props;

  const styles = selectVariants(variantProps);
  const labelId = useId();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

  const [isOpen = false, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });

  const [value = [], setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: propValue,
  });

  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(2),
      flip({
        crossAxis: placement.includes("-"),
        padding: 0,
      }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            height: `${rects.floating.height}px`,
            maxHeight: `${Math.max(50, Math.min(rects.floating.height, 400, availableHeight))}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 0,
      }),
    ],
  });

  const handleSelect = useCallback(
    (index: number | null) => {
      setSelectedIndex(index);
      if (index === null) return;
      if (!isMultiple) setIsOpen(false);
    },
    [isMultiple, setIsOpen]
  );

  function handleTypeaheadMatch(index: number | null) {
    if (isOpen) {
      setActiveIndex(index);
    } else {
      handleSelect(index);
    }
  }

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true,
    virtual: disableTypeahead,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
    enabled: !disableTypeahead,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePress: true,
  });
  const role = useRole(context, { role: "listbox" });
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNav, typeahead, click, dismiss, role]
  );

  const onSelectValue = useCallback(
    (option: string) => {
      if (isMultiple) {
        const valueSet = new Set(value);
        if (valueSet.has(option)) {
          valueSet.delete(option);
        } else {
          valueSet.add(option);
        }
        setValue(Array.from(valueSet));
      } else {
        setValue([option]);
      }
    },
    [isMultiple, setValue, value]
  );
  const hasValue = value.length > 0;

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
      htmlFor: labelId,
      "data-slot": dataAttrDev("label"),
      className: styles.label({
        className: cn(
          slotProps?.label?.className,
          classNames?.label,
          props.className
        ),
      }),
    }),
    [classNames?.label, labelId, slotProps?.label, styles]
  );

  const getTriggerProps: PropGetter<SelectTrigger.Props> = useCallback(
    (props) => ({
      type: "button",
      ...mergeProps(props, slotProps?.trigger),
      id: labelId,
      "data-slot": dataAttrDev("trigger"),
      className: styles.trigger({
        className: cn(
          slotProps?.trigger?.className,
          classNames?.trigger,
          props.className
        ),
      }),
      disabled: isDisabled,
      "aria-disabled": isDisabled,
      "data-disabled": isDisabled,
      ...getReferenceProps({
        ref: setReference,
      }),
    }),
    [
      classNames?.trigger,
      getReferenceProps,
      isDisabled,
      labelId,
      setReference,
      slotProps?.trigger,
      styles,
    ]
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
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      transition: { type: "spring", stiffness: 300, damping: 25 },
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
      ref: setFloating,
      style: floatingStyles,
      ...getFloatingProps(),
    }),
    [
      classNames?.popover,
      floatingStyles,
      getFloatingProps,
      setFloating,
      slotProps?.popover,
      styles,
    ]
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

  const getFocusManagerProps = useCallback(
    (): Omit<FloatingFocusManagerProps, "children"> => ({
      context,
      modal: true,
      returnFocus,
      initialFocus: 0,
    }),
    [context, returnFocus]
  );

  const getFloatingListProps = useCallback(
    (): Omit<ComponentProps<typeof FloatingList>, "children"> => ({
      elementsRef,
      labelsRef,
    }),
    []
  );

  const childrenArray = Children.toArray(children);
  const selectItems = childrenArray.map((item) => {
    if (isValidElement<SelectItem.Props>(item)) {
      return {
        value: item.props.value,
        children: item.props.children,
        textValue: item.props.textValue,
      };
    }
    return null;
  });
  const selectedLabels = useMemo(() => {
    const items = selectItems
      .filter((item) => item && value.includes(item.value))
      .map(
        (item) =>
          item?.textValue ??
          (typeof item?.children === "string"
            ? item.children
            : (item?.value ?? ""))
      );
    return Array.from(new Set(items));
  }, [selectItems, value]);
  const getRenderValue = useMemo(() => {
    if (renderValue) return renderValue(value);
    return selectedLabels.join(",");
  }, [renderValue, selectedLabels, value]);

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
      isOpen,
      getFocusManagerProps,
      getFloatingListProps,
      value,
      activeIndex,
      getItemProps,
      handleSelect,
      onSelectValue,
      label,
      startContent,
      endContent,
      hasValue,
      placeholder,
      getRenderValue,
      errorMessage,
      helperText,
    }),
    [
      activeIndex,
      endContent,
      errorMessage,
      getContentProps,
      getEndContentProps,
      getErrorMessageProps,
      getFloatingListProps,
      getFocusManagerProps,
      getHelperTextProps,
      getIndicatorProps,
      getInnerWrapperProps,
      getItemProps,
      getLabelProps,
      getMainWrapperProps,
      getPlaceholderProps,
      getPopoverProps,
      getRenderValue,
      getRootProps,
      getSelectItemProps,
      getStartContentProps,
      getTriggerProps,
      getValueProps,
      handleSelect,
      hasValue,
      helperText,
      isOpen,
      label,
      onSelectValue,
      placeholder,
      startContent,
      value,
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
