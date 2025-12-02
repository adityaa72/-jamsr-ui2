import { useCallback, useMemo, useRef } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { accordionVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Accordion } from "./accordion";
import type { AccordionVariants } from "./styles";

export const useAccordion = (props: useAccordion.Props) => {
  const [elementProps, variantProps] = mapPropsVariants(
    props,
    accordionVariants.variantKeys
  );
  const {
    value: valueProp,
    defaultValue,
    disabled: isDisabled = false,
    onValueChange,
    isMultiple,
    loop,
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
        className: cn(restProps.className, props.className),
      }),
    }),
    [restProps, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      handleValueChange,
      value,
      isDisabled,
      styles,
      handleAccordionOpen,
      elementRefs,
    }),
    [
      getRootProps,
      handleAccordionOpen,
      handleValueChange,
      isDisabled,
      styles,
      value,
      elementRefs,
    ]
  );
};

export namespace useAccordion {
  export type AccordionValue = string[];
  export interface Props extends UIProps<"div">, AccordionVariants {
    value?: AccordionValue;
    defaultValue?: AccordionValue;
    disabled?: boolean;
    onValueChange?: (value: AccordionValue) => void;
    isMultiple?: boolean;
    loop?: boolean;
  }
}
