import { useCallback } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsr-ui/utils";

import { cardVariants } from "./styles";

import type { Text } from "@jamsr-ui/text";
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsr-ui/utils";

import type { Card } from "./card";
import type { CardContent } from "./card-content";
import type { CardFooter } from "./card-footer";
import type { CardHeader } from "./card-header";
import type { CardSlots, CardVariants } from "./styles";

export const useCard = (props: useCard.Props) => {
  const [newProps, variantKeys] = mapPropsVariants(
    props,
    cardVariants.variantKeys
  );
  const styles = cardVariants(variantKeys);
  const { classNames, slotProps, ...baseProps } = newProps;

  const getBaseProps: PropGetter<UIProps<"div">> = useCallback(
    () => ({
      "data-slot": dataAttrDev("base"),
      ...baseProps,
      className: styles.base({
        className: cn(classNames?.base, baseProps.className),
      }),
    }),
    [baseProps, classNames?.base, styles]
  );

  const getHeaderProps: PropGetter<UIProps<"div">> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("header"),
      ...props,
      className: styles.header({ className: props.className }),
    }),
    [styles]
  );

  const getTitleProps: PropGetter<Text.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("title"),
      ...props,
      className: styles.title({ className: props.className }),
      variant: "h3",
    }),
    [styles]
  );

  const getDescriptionProps: PropGetter<Text.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("description"),
      ...props,
      className: styles.description({ className: props.className }),
    }),
    [styles]
  );

  const getHeaderContentProps: PropGetter<UIProps<"div">> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("header-content"),
      ...props,
      className: styles.headerContent({ className: props.className }),
    }),
    [styles]
  );

  const getContentProps: PropGetter<CardContent.Props> = useCallback(
    // const getContentProps: PropGetter<UIProps<"div">> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("content"),
      ...props,
      className: styles.content({ className: props.className }),
    }),
    [styles]
  );

  const getFooterProps: PropGetter<UIProps<"div">> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("footer"),
      ...props,
      className: styles.footer({ className: props.className }),
    }),
    [styles]
  );

  return {
    slotProps,
    getBaseProps,
    getHeaderProps,
    getHeaderContentProps,
    getTitleProps,
    getDescriptionProps,
    getContentProps,
    getFooterProps,
  };
};

export namespace useCard {
  export interface Props extends UIProps<"div">, CardVariants {
    classNames?: SlotsToClassNames<CardSlots>;
    slotProps?: {
      base?: Card.Props;
      header?: CardHeader.Props;
      headerContent?: CardHeader.Props;
      title?: Text.Props;
      description?: Text.Props;
      content?: CardContent.Props;
      footer?: CardFooter.Props;
    };
  }
}
