import { useCallback, useId, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { dataAttrDev, mergeProps } from "@jamsrui/utils";

import type { PropGetter } from "@jamsrui/utils";

import type { CollapsibleContent } from "./collapsible-content";
import type { CollapsibleTrigger } from "./collapsible-trigger";

export const useCollapsible = (props: useCollapsible.Props) => {
  const {
    defaultOpen,
    isDisabled,
    isOpen: isOpenProp,
    onOpenChange,
    slotProps,
  } = props;
  const [isOpen, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });
  const triggerId = useId();
  const contentId = useId();

  const handleToggle = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [setIsOpen]);

  const getRootProps = useCallback(
    () => ({
      "aria-expanded": isOpen,
      "data-expanded": isOpen,
      "data-slot": dataAttrDev("root"),
    }),
    [isOpen]
  );

  const getContentProps: PropGetter<CollapsibleContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.content ?? {}, props),
      "data-slot": dataAttrDev("content"),
      id: contentId,
      role: "region",
      "aria-labelledby": triggerId,
      hidden: !isOpen,
    }),
    [contentId, isOpen, slotProps?.content, triggerId]
  );

  const getTriggerProps: PropGetter<CollapsibleTrigger.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.trigger ?? {}, props, {
        onClick: handleToggle,
      }),
      id: triggerId,
      "data-slot": dataAttrDev("trigger"),
      "aria-controls": contentId,
      "aria-expanded": isOpen,
      "data-expanded": isOpen,
      disabled: isDisabled,
      "aria-disabled": isDisabled,
    }),
    [contentId, handleToggle, isDisabled, isOpen, slotProps?.trigger, triggerId]
  );

  return useMemo(
    () => ({
      isOpen,
      getTriggerProps,
      getContentProps,
      getRootProps,
    }),
    [getContentProps, getRootProps, getTriggerProps, isOpen]
  );
};

export namespace useCollapsible {
  export interface Props {
    defaultOpen?: boolean;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    isDisabled?: boolean;
    slotProps?: {
      trigger?: CollapsibleTrigger.Props;
      content?: CollapsibleContent.Props;
    };
  }
}
