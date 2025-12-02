import { useCallback, useId, useMemo } from "react";

import { useCompositeItem } from "@jamsrui/composite";
import { cn, dataAttr, dataAttrDev, mergeProps } from "@jamsrui/utils";

import { useAccordionContext } from "./accordion-context";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import { AccordionContent } from "./accordion-content";
import type { AccordionHeading } from "./accordion-heading";
import type { AccordionIndicator } from "./accordion-indicator";
import type { AccordionItem } from "./accordion-item";
import { AccordionPanel } from "./accordion-panel";
import type { AccordionTrigger } from "./accordion-trigger";

export const useAccordionItem = (props: useAccordionItem.Props) => {
  const { styles, handleAccordionOpen, value, elementRefs } =
    useAccordionContext();
  const { index } = useCompositeItem({});
  const indexValue = (index + 1).toString();
  const {
    value: itemValue = indexValue,
    disabled: isDisabled,
    ...elementProps
  } = props;
  const isOpen = useMemo(() => value.includes(itemValue), [value, itemValue]);
  const triggerId = useId();
  const contentId = useId();

  const getItemProps: PropGetter<AccordionItem.Props> = useCallback(
    (props) => ({
      ...elementProps,
      ...props,
      "data-slot": dataAttrDev("accordion-item"),
      className: styles.item({
        className: cn(elementProps.className, props.className),
      }),
      "aria-disabled": dataAttr(isDisabled),
      "data-disabled": dataAttr(isDisabled),
    }),
    [elementProps, isDisabled, styles]
  );

  const getPanelProps: PropGetter<AccordionPanel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("panel"),
      className: styles.panel({
        className: cn(props.className),
      }),
      role: "region",
      "aria-labelledby": triggerId,
      id: contentId,
    }),
    [styles, triggerId, contentId]
  );

  const getContentProps: PropGetter<AccordionContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getTriggerProps: PropGetter<AccordionTrigger.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, {
        onClick: () => {
          handleAccordionOpen(itemValue);
        },
        disabled: isDisabled,
        "aria-disabled": isDisabled,
        "data-disabled": isDisabled,
      }),
      "data-slot": dataAttrDev("trigger"),
      className: styles.trigger({
        className: props.className,
      }),
      id: triggerId,
      "aria-expanded": isOpen,
      "aria-controls": contentId,
    }),
    [
      isDisabled,
      styles,
      triggerId,
      isOpen,
      contentId,
      handleAccordionOpen,
      itemValue,
    ]
  );

  const getIndicatorProps: PropGetter<AccordionIndicator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("indicator"),
      "data-open": dataAttr(isOpen),
      className: styles.indicator({
        className: props.className,
      }),
    }),
    [isOpen, styles]
  );

  const getHeadingProps: PropGetter<AccordionHeading.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("heading"),
      className: styles.heading({
        className: props.className,
      }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      getItemProps,
      getContentProps,
      getTriggerProps,
      getIndicatorProps,
      isOpen,
      isDisabled,
      getHeadingProps,
      getPanelProps,
    }),
    [
      getItemProps,
      getContentProps,
      getTriggerProps,
      getIndicatorProps,
      getHeadingProps,
      isOpen,
      isDisabled,
      getPanelProps,
    ]
  );
};

export namespace useAccordionItem {
  export interface Props extends UIProps<"div"> {
    value?: string;
    disabled?: boolean;
  }
}
