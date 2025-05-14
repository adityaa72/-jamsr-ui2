import { useCallback } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsr-ui/utils";

import { alertVariants } from "./styles";

import type { Text } from "@jamsr-ui/text";
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsr-ui/utils";

import type { Alert } from "./alert";
import type { AlertDescription } from "./alert-description";
import type { AlertTitle } from "./alert-title";
import type { AlertSlots, AlertVariants } from "./styles";

export const useAlert = (props: useAlert.Props) => {
  const [newProps, variantKeys] = mapPropsVariants(
    props,
    alertVariants.variantKeys
  );
  const styles = alertVariants(variantKeys);
  const { classNames, slotProps } = newProps;

  const getRootProps: PropGetter<UIProps<"div">> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("root"),
      ...props,
      className: styles.root({
        className: cn(classNames?.root, props.className),
      }),
    }),
    [classNames?.root, styles]
  );

  const getTitleProps: PropGetter<Text.Props> = useCallback(
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

  const getDescriptionProps: PropGetter<Text.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("description"),
      ...props,
      className: styles.description({
        className: cn(classNames?.description, props.className),
      }),
    }),
    [classNames?.description, styles]
  );

  const getContentProps: PropGetter<UIProps<"div">> = useCallback(
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
    slotProps,
    getRootProps,
    getTitleProps,
    getDescriptionProps,
    getContentProps,
  };
};

export namespace useAlert {
  export interface Props extends AlertVariants {
    classNames?: SlotsToClassNames<AlertSlots>;
    slotProps?: {
      root?: Omit<Alert.Props, "slotProps" | "classNames">;
      title?: AlertTitle.Props;
      content?: UIProps<"div">;
      description?: AlertDescription.Props;
    };
  }
}
