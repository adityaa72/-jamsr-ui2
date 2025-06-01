import { Children, isValidElement, useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { tabsVariant } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";
import type { ReactElement } from "react";

import type { TabsSlots, TabVariants } from "./styles";
import type { Tab } from "./tab";
import type { TabContent } from "./tab-content";
import type { TabCursor } from "./tab-cursor";
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
    slotProps,
    classNames,
    children,
    ...elementProps
  } = $props;
  const styles = tabsVariant(variantProps);

  const [value, setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: propValue,
  });

  const selectedTabContent = useMemo(() => {
    const childrenArray = Children.toArray(children);
    const selected = !value
      ? (childrenArray[0] as ReactElement<Tab.Props>)
      : (childrenArray.find((child) => {
          if (!isValidElement<Tab.Props>(child)) return null;
          return child.props.value === value;
        }) as ReactElement<Tab.Props> | null);
    return selected?.props.children as React.ReactElement;
  }, [children, value]);

  const getRootProps: PropGetter<Tabs.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("tabs"),
      className: styles.root({
        className: cn(classNames?.root, elementProps.className),
      }),
    }),
    [classNames?.root, elementProps, styles]
  );

  const getTabListProps: PropGetter<TabList.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.tabList, props),
      "data-slot": dataAttrDev("tab-list"),
      className: styles.tabList({
        className: cn(
          slotProps?.tabList?.className,
          classNames?.tabList,
          elementProps.className
        ),
      }),
    }),
    [classNames?.tabList, elementProps.className, slotProps?.tabList, styles]
  );

  const getContentProps: PropGetter<TabContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.tabContent, props),
      "data-slot": dataAttrDev("tab-content"),
      className: styles.tabContent({
        className: cn(
          slotProps?.tabContent?.className,
          classNames?.tabContent,
          elementProps.className
        ),
      }),
    }),
    [
      classNames?.tabContent,
      elementProps.className,
      slotProps?.tabContent,
      styles,
    ]
  );

  const getTabProps: PropGetter<Tab.Props> = useCallback(
    (props) => ({
      ...mergeProps<Tab.Props>(slotProps?.tab, props),
      "data-slot": dataAttrDev("tab"),
      className: styles.tab({
        className: cn(
          slotProps?.tab?.className,
          classNames?.tab,
          props.className
        ),
      }),
    }),
    [classNames?.tab, slotProps?.tab, styles]
  );

  const getCursorProps: PropGetter<TabCursor.Props> = useCallback(
    (props) => ({
      layoutId: "cursor",
      ...mergeProps<TabCursor.Props>(slotProps?.cursor, props),
      "data-slot": dataAttrDev("cursor"),
      className: styles.cursor({
        className: cn(
          slotProps?.cursor?.className,
          classNames?.cursor,
          props.className
        ),
      }),
    }),
    [classNames?.cursor, slotProps?.cursor, styles]
  );

  const getPanelProps: PropGetter<TabPanel.Props> = useCallback(
    (props) => ({
      ...mergeProps<TabPanel.Props>(slotProps?.tabContent, props),
      "data-slot": dataAttrDev("tab-panel"),
      className: styles.panel({
        className: cn(
          slotProps?.tabPanel?.className,
          classNames?.panel,
          props.className
        ),
      }),
    }),
    [
      classNames?.panel,
      slotProps?.tabContent,
      slotProps?.tabPanel?.className,
      styles,
    ]
  );

  return useMemo(
    () => ({
      getRootProps,
      getTabListProps,
      getContentProps,
      getTabProps,
      getCursorProps,
      value,
      setValue,
      selectedTabContent,
      getPanelProps,
    }),
    [
      getContentProps,
      getCursorProps,
      getPanelProps,
      getRootProps,
      getTabListProps,
      getTabProps,
      selectedTabContent,
      setValue,
      value,
    ]
  );
};

export namespace useTabs {
  export interface Props extends UIProps<"div">, TabVariants {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    slotProps?: {
      tab?: Tab.Props;
      tabList?: TabList.Props;
      tabContent?: TabContent.Props;
      cursor?: TabCursor.Props;
      tabPanel?: TabPanel.Props;
    };
    classNames?: SlotsToClassNames<TabsSlots>;
  }
}
