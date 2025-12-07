"use client";
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
import {
  cn,
  dataAttr,
  dataAttrDev,
  mapPropsVariants,
  mergeProps,
} from "@jamsrui/utils";

import { selectVariants } from "./styles";

import type {
  FloatingFocusManagerProps,
  FloatingList,
  Placement,
} from "@floating-ui/react";
import type { PropGetter, UIProps } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import type { SelectContent } from "./select-content";
import type { SelectIndicator } from "./select-indicator";
import type { SelectItem } from "./select-item";
import type { SelectItemIndicator } from "./select-item-indicator";
import type { SelectPopover } from "./select-popover";
import type { SelectTrigger } from "./select-trigger";
import type { SelectValue } from "./select-value";
import type { SelectVariantProps } from "./styles";

type SelectItemData = {
  value: string;
  textValue: string;
};

export const useSelect = (props: useSelect.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    selectVariants.variantKeys
  );
  const {
    onValueChange,
    defaultValue,
    value: propValue,
    placeholder = "Select",
    onOpenChange,
    defaultOpen,
    isOpen: isOpenProp,
    isMultiple = false,
    renderValue,
    placement = "bottom-start",
    disabled: isDisabled = false,
    returnFocus = true,
    disableTypeahead = false,
    name,
    form,
    ...elementProps
  } = $props;

  const styles = selectVariants(variantProps);
  const labelId = useId();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

  const [selectItems, setSelectItems] = useState<SelectItemData[]>([]);

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
    [isMultiple, setIsOpen, setSelectedIndex]
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
        className: cn(elementProps.className),
      }),
      "data-open": dataAttr(isOpen),
    }),
    [elementProps, isOpen, styles]
  );

  const getValueProps: PropGetter<SelectValue.Props> = useCallback(
    (props) => ({
      ...mergeProps(props),
      "data-slot": dataAttrDev("value"),
      className: styles.value({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getTriggerProps: PropGetter<SelectTrigger.Props> = useCallback(
    (props) => ({
      type: "button",
      id: labelId,
      ...mergeProps(props),
      "data-slot": dataAttrDev("trigger"),
      className: styles.trigger({
        className: props.className,
      }),
      disabled: isDisabled,
      "aria-disabled": dataAttr(isDisabled),
      "data-disabled": dataAttr(isDisabled),
      ...getReferenceProps({
        ref: setReference,
      }),
    }),
    [getReferenceProps, isDisabled, labelId, setReference, styles]
  );

  const getIndicatorProps: PropGetter<SelectIndicator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("indicator"),
      className: styles.indicator({
        className: cn(props.className),
      }),
    }),
    [styles]
  );

  const getContentProps: PropGetter<SelectContent.Props> = useCallback(
    (props) => ({
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: "spring", stiffness: 300, damping: 25 },
      "data-slot": dataAttrDev("content"),
      ...props,
      className: styles.content({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getPopoverProps: PropGetter<SelectPopover.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("popover"),
      className: styles.popover({
        className: props.className,
      }),
      ref: setFloating,
      style: floatingStyles,
      ...getFloatingProps(),
    }),
    [floatingStyles, getFloatingProps, setFloating, styles]
  );

  const getSelectItemProps: PropGetter<Partial<SelectItem.Props>> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("selectItem"),
      className: styles.selectItem({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getItemIndicatorProps: PropGetter<SelectItemIndicator.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("itemIndicator"),
        className: styles.itemIndicator({
          className: props.className,
        }),
      }),
      [styles]
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

  const updateSelectItems = useCallback(
    (children: React.ReactNode) => {
      const childrenArray = Children.toArray(children);
      const items: SelectItemData[] = [];
      childrenArray.forEach((item) => {
        if (isValidElement<SelectItem.Props>(item)) {
          items.push({
            value: item.props.value,
            textValue: item.props.textValue,
          });
        }
      });
      setSelectItems(items);
    },
    [setSelectItems]
  );

  const selectedLabels = useMemo(() => {
    const items = selectItems
      .filter((item) => item && value.includes(item.value))
      .map((item) => item?.textValue);
    return Array.from(new Set(items));
  }, [selectItems, value]);

  const getRenderValue = useMemo(() => {
    if (!value.length) return placeholder;
    if (renderValue) return renderValue(value);
    return selectedLabels.join(",");
  }, [placeholder, renderValue, selectedLabels, value]);

  return useMemo(
    () => ({
      getRootProps,
      getTriggerProps,
      getIndicatorProps,
      getContentProps,
      getPopoverProps,
      getSelectItemProps,
      getValueProps,
      isOpen,
      getFocusManagerProps,
      getFloatingListProps,
      value,
      activeIndex,
      getItemProps,
      handleSelect,
      onSelectValue,
      hasValue,
      placeholder,
      getRenderValue,
      getItemIndicatorProps,
      updateSelectItems,
    }),
    [
      activeIndex,
      getItemIndicatorProps,
      updateSelectItems,
      getContentProps,
      getFloatingListProps,
      getFocusManagerProps,
      getIndicatorProps,
      getItemProps,
      getPopoverProps,
      getRenderValue,
      getRootProps,
      getSelectItemProps,
      getTriggerProps,
      getValueProps,
      handleSelect,
      hasValue,
      isOpen,
      onSelectValue,
      placeholder,
      value,
    ]
  );
};

export namespace useSelect {
  export interface Props extends UIProps<"div">, SelectVariantProps {
    placement?: Placement;
    placeholder?: string;
    disabled?: boolean;
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (value: boolean) => void;
    isMultiple?: boolean;
    renderValue?: (value: string[]) => React.ReactElement;
    returnFocus?: boolean;
    disableTypeahead?: boolean;
    name?: string;
    form?: string;
  }
}
