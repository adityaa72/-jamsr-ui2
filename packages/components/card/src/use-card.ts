import { useCallback } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsr-ui/utils";

import { cardVariants } from "./styles";

import type { Text } from "@jamsr-ui/text";
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsr-ui/utils";

import type { Card } from "./card";
import type { CardContent } from "./card-content";
import type { CardDescription } from "./card-description";
import type { CardFooter } from "./card-footer";
import type { CardHeader } from "./card-header";
import type { CardHeaderContent } from "./card-header-content";
import type { CardTitle } from "./card-title";
import type { CardSlots, CardVariants } from "./styles";

export const useCard = (props: useCard.Props) => {
  const [newProps, variantKeys] = mapPropsVariants(
    props,
    cardVariants.variantKeys
  );
  const styles = cardVariants(variantKeys);
  const { classNames, slotProps, ...baseProps } = newProps;

  const getRootProps: PropGetter<Card.Props> = useCallback(
    () => ({
      "data-slot": dataAttrDev("root"),
      ...baseProps,
      className: styles.root({
        className: cn(classNames?.root, baseProps.className),
      }),
    }),
    [baseProps, classNames?.root, styles]
  );

  const getHeaderProps: PropGetter<CardHeader.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("header"),
      ...props,
      className: styles.header({ className: props.className }),
    }),
    [styles]
  );

  const getTitleProps: PropGetter<CardTitle.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("title"),
      ...props,
      className: styles.title({ className: props.className }),
      variant: "h5",
    }),
    [styles]
  );

  const getDescriptionProps: PropGetter<CardDescription.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("description"),
      variant: "caption",
      ...props,
      className: styles.description({ className: props.className }),
    }),
    [styles]
  );

  const getHeaderContentProps: PropGetter<CardHeaderContent.Props> =
    useCallback(
      (props) => ({
        "data-slot": dataAttrDev("header-content"),
        ...props,
        className: styles.headerContent({ className: props.className }),
      }),
      [styles]
    );

  const getContentProps: PropGetter<CardContent.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("content"),
      ...props,
      className: styles.content({ className: props.className }),
    }),
    [styles]
  );

  const getFooterProps: PropGetter<CardFooter.Props> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("footer"),
      ...props,
      className: styles.footer({ className: props.className }),
    }),
    [styles]
  );

  return {
    slotProps,
    getRootProps,
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
      header?: CardHeader.Props;
      headerContent?: CardHeader.Props;
      title?: Text.Props;
      description?: Text.Props;
      content?: CardContent.Props;
      footer?: CardFooter.Props;
    };
  }
}
