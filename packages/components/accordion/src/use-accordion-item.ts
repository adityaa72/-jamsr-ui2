import { useCallback, useId, useMemo } from "react";

import { cn, dataAttrDev, mergeProps } from "@jamsr-ui/utils";

import { useAccordionContext } from "./accordion-context";
import { useAccordionListItem } from "./accordion-list-provider";

import type { PropGetter, UIProps } from "@jamsr-ui/utils";

import type { AccordionContent } from "./accordion-content";
import type { AccordionContentWrapper } from "./accordion-content-wrapper";
import type { AccordionItem } from "./accordion-item";
import type { AccordionTrigger } from "./accordion-trigger";

export const useAccordionItem = (props: useAccordionItem.Props) => {
  const { styles, classNames, handleAccordionOpen, value, elementRefs } =
    useAccordionContext();
  const { index } = useAccordionListItem();
  const indexValue = (index + 1).toString();
  const { value: itemValue = indexValue, ...elementProps } = props;
  const isOpen = useMemo(() => value.includes(itemValue), [value, itemValue]);

  const triggerId = useId();
  const contentId = useId();

  const triggerRef = useCallback(
    (node: HTMLElement | null) => {
      elementRefs.current[index] = node;
    },
    [elementRefs, index]
  );

  const focusItem = useCallback(
    (index: number) => {
      if (elementRefs.current[index]) {
        elementRefs.current[index]?.focus();
      }
    },
    [elementRefs]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const totalItems = elementRefs.current.length;
      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault();
          handleAccordionOpen(itemValue);
          break;
        case "ArrowUp":
          event.preventDefault();
          focusItem(index === 0 ? totalItems - 1 : index - 1);
          break;
        case "ArrowDown":
          event.preventDefault();
          focusItem(index === totalItems - 1 ? 0 : index + 1);
          break;
        case "Home":
          event.preventDefault();
          focusItem(0);
          break;
        case "End":
          event.preventDefault();
          focusItem(totalItems - 1);
          break;
        default:
          break;
      }
    },
    [elementRefs, focusItem, handleAccordionOpen, index, itemValue]
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
    }),
    [classNames?.item, elementProps, styles]
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
      styles,
      classNames?.trigger,
      triggerId,
      isOpen,
      contentId,
      handleAccordionOpen,
      itemValue,
    ]
  );

  return useMemo(
    () => ({
      getItemProps,
      getContentProps,
      getTriggerProps,
      getContentWrapperProps,
      isOpen,
    }),
    [
      getContentProps,
      getContentWrapperProps,
      getItemProps,
      getTriggerProps,
      isOpen,
    ]
  );
};

export namespace useAccordionItem {
  export interface Props extends UIProps<"div"> {
    value?: string;
  }
}
