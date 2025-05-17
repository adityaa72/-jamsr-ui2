import { useCallback, useMemo } from "react";

import { useControlled } from "@jamsr-ui/hooks";
import { cn, dataAttrDev, mapPropsVariants } from "@jamsr-ui/utils";

import { accordionVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsr-ui/utils";

import type { Accordion } from "./accordion";
import type { AccordionContent } from "./accordion-content";
import type { AccordionContentWrapper } from "./accordion-content-wrapper";
import type { AccordionItem } from "./accordion-item";
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
    ...restProps
  } = elementProps;

  const [value = [], setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Accordion",
    state: "value",
  });
  console.log(" value:->", value);

  const handleValueChange = useCallback(() => {}, []);

  const styles = accordionVariants(variantProps);

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
    ]
  );
};

export namespace useAccordion {
  export type AccordionValue = string[];
  export interface Props extends UIProps<"div">, AccordionVariants {
    slotProps?: {
      trigger?: AccordionTrigger.Props;
      item?: AccordionItem.Props;
      content?: AccordionContent.Props;
      contentWrapper?: AccordionContentWrapper.Props;
    };
    classNames?: SlotsToClassNames<AccordionSlots>;
    value?: AccordionValue;
    defaultValue?: AccordionValue;
    isDisabled?: boolean;
    onValueChange?: (value: AccordionValue) => void;
    isMultiple?: boolean;
    loop?: boolean;
  }
}
