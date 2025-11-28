import { useCallback, useId, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { dataAttrDev, mergeProps } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { CollapsibleContent } from "./collapsible-content";

export const useCollapsible = (props: useCollapsible.Props) => {
  const {
    defaultOpen,
    disabled: isDisabled = false,
    isOpen: isOpenProp,
    onOpenChange,
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
      ...props,
      "data-slot": dataAttrDev("content"),
      id: contentId,
      role: "region",
      "aria-labelledby": triggerId,
      hidden: !isOpen,
    }),
    [contentId, isOpen, triggerId]
  );

  const getTriggerProps = useCallback(
    (): UIProps<"button"> => ({
      ...mergeProps(
        {},
        {
          onClick: handleToggle,
        }
      ),
      id: triggerId,
      "data-slot": dataAttrDev("trigger"),
      "aria-controls": contentId,
      "aria-expanded": isOpen,
      "data-expanded": isOpen,
      disabled: isDisabled,
      "aria-disabled": isDisabled,
    }),
    [contentId, handleToggle, isDisabled, isOpen, triggerId]
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
    disabled?: boolean;
  }
}
