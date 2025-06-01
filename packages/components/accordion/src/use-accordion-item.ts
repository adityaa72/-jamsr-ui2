import { useCallback, useId, useMemo } from "react";

import {
  cn,
  dataAttrDev,
  isDisabledElement,
  mergeProps,
} from "@jamsrui/utils";

import { useAccordionContext } from "./accordion-context";
import { useAccordionListItem } from "./accordion-list-provider";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { AccordionContent } from "./accordion-content";
import type { AccordionContentWrapper } from "./accordion-content-wrapper";
import type { AccordionHeadingContent } from "./accordion-heading-content";
import type { AccordionIndicator } from "./accordion-indicator";
import type { AccordionItem } from "./accordion-item";
import type { AccordionTrigger } from "./accordion-trigger";

export const useAccordionItem = (props: useAccordionItem.Props) => {
  const {
    styles,
    classNames,
    handleAccordionOpen,
    value,
    elementRefs,
    slotProps,
  } = useAccordionContext();
  const { index } = useAccordionListItem();
  const indexValue = (index + 1).toString();
  const {
    value: itemValue = indexValue,
    isDisabled,
    indicator,
    ...elementProps
  } = props;
  const isOpen = useMemo(() => value.includes(itemValue), [value, itemValue]);
  const totalItems = elementRefs.current.length;

  const triggerId = useId();
  const contentId = useId();

  const triggerRef = useCallback(
    (node: HTMLElement | null) => {
      elementRefs.current[index] = node;
    },
    [elementRefs, index]
  );

  // Helper function to find the next enabled item in a given direction
  const findNextEnabledItemIdx = useCallback(
    (start: number, direction: "up" | "down") => {
      const dir = direction === "up" ? -1 : 1;
      let current = start;
      do {
        current = (current + dir + totalItems) % totalItems;
        const element = elementRefs.current[current];
        if (element && !isDisabledElement(element)) {
          return current;
        }
      } while (current !== start);
      return start; // Return original position if no enabled item found
    },
    [elementRefs, totalItems]
  );

  const focusItem = useCallback(
    (index: number, direction: "up" | "down") => {
      const idx = findNextEnabledItemIdx(index, direction);
      elementRefs.current[idx]?.focus();
    },
    [elementRefs, findNextEnabledItemIdx]
  );

  const blurItem = useCallback(() => {
    if (elementRefs.current[index]) {
      elementRefs.current[index]?.blur();
    }
  }, [elementRefs, index]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault();
          handleAccordionOpen(itemValue);
          break;
        case "ArrowUp":
          event.preventDefault();
          focusItem(index, "up");
          break;
        case "ArrowDown":
          event.preventDefault();
          focusItem(index, "down");
          break;
        case "Home":
          event.preventDefault();
          focusItem(-1, "down");
          break;
        case "End":
          event.preventDefault();
          focusItem(0, "up");
          break;
        case "Escape":
          event.preventDefault();
          blurItem();
          break;
        default:
          break;
      }
    },
    [blurItem, focusItem, handleAccordionOpen, index, itemValue]
  );

  const getItemProps: PropGetter<AccordionItem.Props> = useCallback(
    (props) => ({
      ...elementProps,
      ...props,
      "data-slot": dataAttrDev("item"),
      className: styles.item({
        className: cn(
          classNames?.item,
          elementProps.className,
          props.className
        ),
      }),
      "aria-disabled": isDisabled,
      "data-disabled": isDisabled,
    }),
    [classNames?.item, elementProps, isDisabled, styles]
  );

  const getContentWrapperProps: PropGetter<AccordionContentWrapper.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("content-wrapper"),
        className: styles.contentWrapper({
          className: cn(classNames?.contentWrapper, props.className),
        }),
      }),
      [classNames?.contentWrapper, styles]
    );

  const getContentProps: PropGetter<AccordionContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(classNames?.content, props.className),
      }),
      role: "region",
      "aria-labelledby": triggerId,
      id: contentId,
    }),
    [classNames?.content, contentId, styles, triggerId]
  );

  const getTriggerProps: PropGetter<AccordionTrigger.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, {
        ref: triggerRef,
        onClick: () => {
          handleAccordionOpen(itemValue);
        },
        onKeyDown: handleKeyDown,
        disabled: isDisabled,
        "aria-disabled": isDisabled,
        "data-disabled": isDisabled,
      }),
      "data-slot": dataAttrDev("trigger"),
      className: styles.trigger({
        className: cn(classNames?.trigger, props.className),
      }),
      id: triggerId,
      "aria-expanded": isOpen,
      "aria-controls": contentId,
    }),
    [
      triggerRef,
      handleKeyDown,
      isDisabled,
      styles,
      classNames?.trigger,
      triggerId,
      isOpen,
      contentId,
      handleAccordionOpen,
      itemValue,
    ]
  );

  const getIndicatorProps: PropGetter<AccordionIndicator.Props> = useCallback(
    (props) => ({
      ...slotProps?.trigger,
      ...props,
      "data-slot": dataAttrDev("indicator"),
      "data-open": isOpen,
      className: styles.indicator({
        className: cn(
          slotProps?.indicator?.className,
          classNames?.indicator,
          props.className
        ),
      }),
    }),
    [
      classNames?.indicator,
      isOpen,
      slotProps?.indicator?.className,
      slotProps?.trigger,
      styles,
    ]
  );

  const getHeadingContentProps: PropGetter<AccordionHeadingContent.Props> =
    useCallback(
      (props) => ({
        ...mergeProps(slotProps?.headingContent, props),
        "data-slot": dataAttrDev("heading-content"),
        className: styles.headingContent({
          className: cn(
            slotProps?.headingContent?.className,
            classNames?.headingContent,
            props.className
          ),
        }),
      }),
      [classNames?.headingContent, slotProps?.headingContent, styles]
    );

  return useMemo(
    () => ({
      getItemProps,
      getContentProps,
      getTriggerProps,
      getContentWrapperProps,
      getIndicatorProps,
      getHeadingContentProps,
      isOpen,
      indicator,
      isDisabled,
    }),
    [
      getItemProps,
      getContentProps,
      getTriggerProps,
      getContentWrapperProps,
      getIndicatorProps,
      getHeadingContentProps,
      isOpen,
      indicator,
      isDisabled,
    ]
  );
};

export namespace useAccordionItem {
  export interface Props extends UIProps<"div"> {
    value?: string;
    isDisabled?: boolean;
    indicator?: React.ReactNode;
  }
}
