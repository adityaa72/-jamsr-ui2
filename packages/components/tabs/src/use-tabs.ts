import { useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { tabsVariant } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { TabsVariants } from "./styles";
import type { Tab } from "./tab";
import type { TabIndicator } from "./tab-indicator";
import type { TabList } from "./tab-list";
import type { TabPanel } from "./tab-panel";
import type { Tabs } from "./tabs";

export const useTabs = (props: useTabs.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    tabsVariant.variantKeys
  );

  const {
    defaultValue,
    value: propValue,
    onValueChange,
    children,
    ...elementProps
  } = $props;
  const styles = tabsVariant(variantProps);

  const [value, setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: propValue,
  });

  const getRootProps: PropGetter<Tabs.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("tabs"),
      className: styles.root({
        className: elementProps.className,
      }),
      children,
    }),
    [elementProps, styles]
  );

  const getTabListProps: PropGetter<TabList.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("tab-list"),
      className: styles.list({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getTabProps: PropGetter<Tab.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("tab"),
      className: styles.tab({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getIndicatorProps: PropGetter<TabIndicator.Props> = useCallback(
    (props) => ({
      layoutId: "indicator",
      ...props,
      "data-slot": dataAttrDev("indicator"),
      className: styles.indicator({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getPanelProps: PropGetter<TabPanel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("tab-panel"),
      className: styles.panel({
        className: props.className,
      }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getTabListProps,
      getTabProps,
      getIndicatorProps,
      value,
      setValue,
      getPanelProps,
    }),
    [
      getIndicatorProps,
      getPanelProps,
      getRootProps,
      getTabListProps,
      getTabProps,
      setValue,
      value,
    ]
  );
};

export namespace useTabs {
  export interface Props extends UIProps<"div">, TabsVariants {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
  }
}
