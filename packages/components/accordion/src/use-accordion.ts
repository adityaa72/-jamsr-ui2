import { useCallback, useMemo } from "react";

import { useControlled } from "@jamsr-ui/hooks";

export const useAccordion = (props: useAccordion.Props) => {
  const {
    value: valueProp,
    defaultValue,
    isDisabled,
    onValueChange,
    isMultiple,
    loop,
  } = props;

  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Accordion",
    state: "value",
  });

  const handleValueChange = useCallback(() => {}, []);
  const getRootProps = useCallback(() => {}, []);

  return useMemo(
    () => ({
      getRootProps,
      handleValueChange,
      value,
      isDisabled,
    }),
    [getRootProps, handleValueChange, isDisabled, value]
  );
};

export namespace useAccordion {
  export type AccordionValue = string[];
  export interface Props {
    value?: AccordionValue;
    defaultValue?: AccordionValue;
    isDisabled?: boolean;
    onValueChange?: (value: AccordionValue) => void;
    isMultiple?: boolean;
    loop?: boolean;
  }
}
