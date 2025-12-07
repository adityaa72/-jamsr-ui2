"use client";
import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { cardVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Card } from "./card";
import type { CardContent } from "./card-content";
import type { CardDescription } from "./card-description";
import type { CardFooter } from "./card-footer";
import type { CardHeader } from "./card-header";
import type { CardTitle } from "./card-title";
import type { CardVariants } from "./styles";

export const useCard = (props: useCard.Props) => {
  const [newProps, variantKeys] = mapPropsVariants(
    props,
    cardVariants.variantKeys
  );
  const styles = cardVariants(variantKeys);
  const { ...baseProps } = newProps;

  const getRootProps: PropGetter<Card.Props> = useCallback(
    () => ({
      "data-slot": dataAttrDev("root"),
      ...baseProps,
      className: styles.root({
        className: cn(baseProps.className),
      }),
    }),
    [baseProps, styles]
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

  return useMemo(
    () => ({
      getRootProps,
      getHeaderProps,
      getTitleProps,
      getDescriptionProps,
      getContentProps,
      getFooterProps,
    }),
    [
      getContentProps,
      getDescriptionProps,
      getFooterProps,
      getHeaderProps,
      getRootProps,
      getTitleProps,
    ]
  );
};

export namespace useCard {
  export interface Props extends UIProps<"div">, CardVariants {}
}
