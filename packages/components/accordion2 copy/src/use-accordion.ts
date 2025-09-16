import { useCallback, useMemo, useRef } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { accordionVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { Accordion } from "./accordion";
import type { AccordionContent } from "./accordion-content";
import type { AccordionHeader } from "./accordion-header";
import type { AccordionItem } from "./accordion-item";
import type { AccordionPanel } from "./accordion-panel";
import type { AccordionTrigger } from "./accordion-trigger";
import type { AccordionSlots, AccordionVariants } from "./styles";

export const useAccordion = (props: useAccordion.Props) => {
  const [elementProps, variantProps] = mapPropsVariants(
    props,
    accordionVariants.variantKeys
  );
  const {
    value: valueProp,
    defaultValue,
    isDisabled,
    onValueChange,
    isMultiple,
    loop,
    slotProps,
    classNames,
    hideIndicator,
    ...restProps
  } = elementProps;

  const [value = [], setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
  });

  const handleValueChange = useCallback(() => {}, []);

  const styles = accordionVariants(variantProps);
  const elementRefs = useRef<(HTMLElement | null)[]>([]);

  const handleAccordionOpen = useCallback(
    (idx: string) => {
      const isOpen = value.includes(idx);
      if (isMultiple) {
        const newValue = new Set(value);
        if (isOpen) newValue.delete(idx);
        else newValue.add(idx); // toggle
        setValue(Array.from(newValue));
      } else {
        setValue(isOpen ? [] : [idx]);
        onValueChange?.(isOpen ? [] : [idx]);
      }
    },
    [isMultiple, onValueChange, setValue, value]
  );

  const getRootProps: PropGetter<Accordion.Props> = useCallback(
    (props) => ({
      ...restProps,
      ...props,
      "data-slot": dataAttrDev("root"),
      className: styles.root({
        className: cn(classNames?.root, restProps.className, props.className),
      }),
    }),
    [classNames?.root, restProps, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      handleValueChange,
      value,
      isDisabled,
      slotProps,
      classNames,
      styles,
      handleAccordionOpen,
      elementRefs,
      hideIndicator,
    }),
    [
      classNames,
      getRootProps,
      handleAccordionOpen,
      handleValueChange,
      isDisabled,
      slotProps,
      styles,
      value,
      hideIndicator,
    ]
  );
};

export namespace useAccordion {
  export type AccordionValue = string[];
  export interface Props extends UIProps<"div">, AccordionVariants {
    slotProps?: {
      trigger?: AccordionTrigger.Props;
      item?: AccordionItem.Props;
      panel?: AccordionPanel.Props;
      content?: AccordionContent.Props;
      header?: AccordionHeader.Props;
    };
    classNames?: SlotsToClassNames<AccordionSlots>;
    value?: AccordionValue;
    defaultValue?: AccordionValue;
    isDisabled?: boolean;
    onValueChange?: (value: AccordionValue) => void;
    isMultiple?: boolean;
    loop?: boolean;
    hideIndicator?: boolean;
  }
}
