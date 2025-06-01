import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { iconMappingDefault } from "./icons";
import { alertStyles } from "./styles";

import type {
  PropGetter,
  SlotsToClassNames,
  UIProps,
  UnknownTV,
} from "@jamsrui/utils";

import type { Alert } from "./alert";
import type { AlertContent } from "./alert-content";
import type { AlertDescription } from "./alert-description";
import type { AlertIcon } from "./alert-icon";
import type { AlertTitle } from "./alert-title";
import type { IconMapping } from "./icons";
import type { AlertSlots, AlertVariants } from "./styles";

export const useAlert = (props: useAlert.Props) => {
  const [newProps, variantKeys] = mapPropsVariants(
    props,
    alertStyles.variantKeys
  );
  const {
    classNames,
    slotProps,
    tv = alertStyles,
    endContent,
    icon: iconProp,
    iconMapping,
    hideIcon,
    ...rootProps
  } = newProps;

  const styles = (tv as typeof alertStyles)(variantKeys);

  const { status = "default" } = variantKeys;
  const icon = iconProp ?? iconMapping?.[status] ?? iconMappingDefault[status];

  const getRootProps: PropGetter<Alert.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("root"),
      role: "alert",
      ...rootProps,
      ...props,
      className: styles.root({
        className: cn(classNames?.root, props.className),
      }),
    }),
    [classNames?.root, rootProps, styles]
  );

  const getTitleProps: PropGetter<AlertTitle.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.title, props),
      "data-slot": dataAttrDev("title"),
      className: styles.title({
        className: cn(
          slotProps?.title?.className,
          classNames?.title,
          props.className
        ),
      }),
      variant: "h6",
    }),
    [classNames?.title, slotProps?.title, styles]
  );

  const getDescriptionProps: PropGetter<AlertDescription.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.description, props),
      "data-slot": dataAttrDev("description"),
      className: styles.description({
        className: cn(
          slotProps?.description?.className,
          classNames?.description,
          props.className
        ),
      }),
    }),
    [classNames?.description, slotProps?.description, styles]
  );

  const getContentProps: PropGetter<AlertContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.content, props),
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(
          slotProps?.content?.className,
          classNames?.content,
          props.className
        ),
      }),
    }),
    [classNames?.content, slotProps?.content, styles]
  );

  const getIconProps: PropGetter<AlertIcon.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.icon, props),
      "data-slot": dataAttrDev("icon"),
      className: styles.icon({
        className: cn(
          slotProps?.icon?.className,
          classNames?.icon,
          props.className
        ),
      }),
    }),
    [classNames?.icon, slotProps?.icon, styles]
  );

  return useMemo(
    () => ({
      hideIcon,
      icon,
      endContent,
      slotProps,
      getRootProps,
      getTitleProps,
      getDescriptionProps,
      getContentProps,
      getIconProps,
    }),
    [
      endContent,
      getContentProps,
      getDescriptionProps,
      getRootProps,
      getTitleProps,
      hideIcon,
      icon,
      slotProps,
      getIconProps,
    ]
  );
};

export namespace useAlert {
  export interface Props extends UIProps<"div">, AlertVariants {
    classNames?: SlotsToClassNames<AlertSlots>;
    endContent?: React.ReactNode;
    icon?: React.ReactNode;
    iconMapping?: Partial<IconMapping>;
    slotProps?: {
      title?: AlertTitle.Props;
      content?: AlertContent.Props;
      description?: AlertDescription.Props;
      icon?: AlertIcon.Props;
    };
    tv?: UnknownTV;
    hideIcon?: boolean;
  }
}
