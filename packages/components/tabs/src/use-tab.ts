"use client";
import { useCallback, useMemo } from "react";

import { useTabsContext } from "./tabs-context";

export const useTab = (props: useTab.Props) => {
  const { value: tabValue } = props;
  const { value, setValue } = useTabsContext();

  const handleClick = useCallback(() => {
    setValue(tabValue);
  }, [setValue, tabValue]);
  const isActive = value === tabValue;

  return useMemo(() => ({ isActive, handleClick }), [handleClick, isActive]);
};

export namespace useTab {
  export interface Props {
    value: string;
  }
}
