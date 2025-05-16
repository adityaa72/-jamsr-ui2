import { useCallback } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsr-ui/utils";

import { iconMappingDefault } from "./icons";
import { alertStyles } from "./styles";

import type {
  PropGetter,
  SlotsToClassNames,
  UIProps,
  UnknownTV,
} from "@jamsr-ui/utils";

import type { Alert } from "./alert";
import type { AlertContent } from "./alert-content";
import type { AlertDescription } from "./alert-description";
import type { AlertTitle } from "./alert-title";
import type { IconMapping } from "./icons";
import type { AlertSlots } from "./styles";
import type { AlertVariants } from "./types";

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
    ...rootProps
  } = newProps;

  const styles = (tv as typeof alertStyles)(variantKeys);

  const { status = "default" } = variantKeys;
  const icon = iconProp ?? iconMapping?.[status] ?? iconMappingDefault[status];

  const getRootProps: PropGetter<Alert.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("root"),
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
      "data-slot": dataAttrDev("title"),
      ...props,
      className: styles.title({
        className: cn(classNames?.title, props.className),
      }),
      variant: "h3",
    }),
    [classNames?.title, styles]
  );

  const getDescriptionProps: PropGetter<AlertDescription.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("description"),
      ...props,
      className: styles.description({
        className: cn(classNames?.description, props.className),
      }),
    }),
    [classNames?.description, styles]
  );

  const getContentProps: PropGetter<AlertContent.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("content"),
      ...props,
      className: styles.content({
        className: cn(classNames?.content, props.className),
      }),
    }),
    [classNames?.content, styles]
  );

  return {
    icon,
    endContent,
    slotProps,
    getRootProps,
    getTitleProps,
    getDescriptionProps,
    getContentProps,
  };
};

export namespace useAlert {
  export interface Props extends UIProps<"div"> {
    variant?: AlertVariants.Variant;
    status?: AlertVariants.Status;
    radius?: AlertVariants.Radius;
    classNames?: SlotsToClassNames<AlertSlots>;
    endContent?: React.ReactNode;
    icon?: React.ReactNode;
    iconMapping?: Partial<IconMapping>;
    slotProps?: {
      title?: AlertTitle.Props;
      content?: AlertContent.Props;
      description?: AlertDescription.Props;
    };
    tv?: UnknownTV;
  }
}
