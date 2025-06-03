import { useListItem } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectItem = (props: SelectItem.Props) => {
  const {
    textValue,
    children,
    value,
    isDisabled: isDisabledProp,
    disabled,
  } = props;
  const {
    getSelectItemProps,
    value: selectValue,
    activeIndex,
    getItemProps,
    handleSelect,
    onSelectValue,
  } = useSelectContext();
  const isDisabled = isDisabledProp ?? disabled;

  const listLabel =
    textValue ?? (typeof children === "string" ? children : textValue);
  if (!listLabel) {
    console.warn(`No label provided for list item with value ${value}`);
  }

  const { ref, index } = useListItem({
    label: listLabel,
  });

  const isActive = activeIndex === index;
  const isSelected = selectValue.includes(value);

  const handleClick = () => {
    onSelectValue(value);
    handleSelect(index);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const renderElement = useRenderElement("button", {
    props: [
      getSelectItemProps(props),
      {
        ref,
      },
      {
        role: "option",
        "aria-selected": isSelected,
        "data-selected": isSelected,
        "aria-disabled": isDisabled,
        "data-disabled": isDisabled,
        "data-active": isActive,
        disabled: isDisabled,
        tabIndex: isActive ? 0 : -1,
      },
      getItemProps({
        onClick: handleClick,
        onKeyDown: handleOnKeyDown,
      }) as any,
    ],
  });
  return renderElement;
};

export namespace SelectItem {
  export interface Props extends UIProps<"button"> {
    textValue?: string;
    value: string;
    isDisabled?: boolean;
    disabled?: boolean;
  }
}
