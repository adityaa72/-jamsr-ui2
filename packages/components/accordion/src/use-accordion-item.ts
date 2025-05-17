import { useCallback, useId, useMemo } from "react";

import { cn, dataAttrDev, mergeProps } from "@jamsr-ui/utils";

import { useAccordionContext } from "./accordion-context";

import type { PropGetter, UIProps } from "@jamsr-ui/utils";

import type { AccordionContent } from "./accordion-content";
import type { AccordionContentWrapper } from "./accordion-content-wrapper";
import type { AccordionItem } from "./accordion-item";
import type { AccordionTrigger } from "./accordion-trigger";

export const useAccordionItem = (props: useAccordionItem.Props) => {
  const { styles, classNames, handleAccordionOpen, value } =
    useAccordionContext();
  const { value: valueProp = "-", ...elementProps } = props;
  const isOpen = useMemo(() => value.includes(valueProp), [value, valueProp]);

  const triggerId = useId();
  const contentId = useId();

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
        onClick: () => {
          handleAccordionOpen(valueProp);
        },
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
      classNames?.trigger,
      contentId,
      handleAccordionOpen,
      isOpen,
      styles,
      triggerId,
      valueProp,
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
  export type Orientation = "horizontal" | "vertical";
  export interface Props extends UIProps<"div"> {
    value?: string;
  }
}
