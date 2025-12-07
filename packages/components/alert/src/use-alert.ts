"use client";
import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { iconMappingDefault } from "./icons";
import { alertStyles } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Alert } from "./alert";
import type { AlertContent } from "./alert-content";
import type { AlertDescription } from "./alert-description";
import type { AlertIcon } from "./alert-icon";
import type { AlertTitle } from "./alert-title";
import type { AlertVariants } from "./styles";

export const useAlert = (props: useAlert.Props) => {
  const [newProps, variantKeys] = mapPropsVariants(
    props,
    alertStyles.variantKeys
  );
  const { ...rootProps } = newProps;

  const styles = alertStyles(variantKeys);
  const { status = "default" } = variantKeys;
  const icon = iconMappingDefault[status];

  const getRootProps: PropGetter<Alert.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("root"),
      role: "alert",
      ...rootProps,
      ...props,
      className: styles.root({
        className: cn(props.className),
      }),
    }),
    [rootProps, styles]
  );

  const getTitleProps: PropGetter<AlertTitle.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("title"),
      className: styles.title({
        className: props.className,
      }),
      variant: "h6",
    }),
    [styles]
  );

  const getDescriptionProps: PropGetter<AlertDescription.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("description"),
      className: styles.description({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getContentProps: PropGetter<AlertContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getIconProps: PropGetter<AlertIcon.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("icon"),
      className: styles.icon({
        className: props.className,
      }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      icon,
      getRootProps,
      getTitleProps,
      getDescriptionProps,
      getContentProps,
      getIconProps,
    }),
    [
      getContentProps,
      getDescriptionProps,
      getRootProps,
      getTitleProps,
      icon,
      getIconProps,
    ]
  );
};

export namespace useAlert {
  export interface Props extends UIProps<"div">, AlertVariants {}
}
