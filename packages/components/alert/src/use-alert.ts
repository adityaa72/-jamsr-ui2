import { useCallback } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsr-ui/utils";

import { alertStyles } from "./styles";

import type { Text } from "@jamsr-ui/text";
import type {
  PropGetter,
  SlotsToClassNames,
  UIProps,
  UnknownTV,
} from "@jamsr-ui/utils";

import type { AlertContent } from "./alert-content";
import type { AlertDescription } from "./alert-description";
import type { AlertTitle } from "./alert-title";
import type { AlertSlots, AlertVariants } from "./styles";

export const useAlert = (props: useAlert.Props) => {
  const [newProps, variantKeys] = mapPropsVariants(
    props,
    alertStyles.variantKeys
  );
  const { classNames, slotProps, tv = alertStyles } = newProps;
  const styles = (tv as typeof alertStyles)(variantKeys);

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
      title?: AlertTitle.Props;
      content?: AlertContent.Props;
      description?: AlertDescription.Props;
    };
    tv?: UnknownTV;
  }
}
