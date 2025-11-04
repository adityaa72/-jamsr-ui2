import { useCallback, useEffect, useMemo, useState } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { avatarVariants } from "./styles";
import { getFirstChar } from "./utils";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { AvatarFallback } from "./avatar-fallback";
import type { AvatarImage } from "./avatar-image";
import type { AvatarRoot } from "./avatar-root";
import type { AvatarSlots, AvatarVariants } from "./styles";

export const useAvatar = (props: useAvatar.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    avatarVariants.variantKeys
  );
  const {
    classNames,
    children,
    alt = "",
    fallback,
    onError,
    name,
    src,
    ...imageProps
  } = $props;

  const fallBackString =
    (typeof children === "string" && getFirstChar(children)) ||
    (alt.length > 0 && getFirstChar(alt)) ||
    "";
  const color = variantProps.color ?? "default";

  const styles = avatarVariants({
    ...variantProps,
    color,
  });
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const hasImage = imgSrc?.length ?? 0 > 0;

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleOnError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      onError?.(e);
      const url =
        typeof fallback === "function" ? fallback({ alt, name }) : fallback;
      if (url) setImgSrc(url);
      else setImgSrc(undefined);
    },
    [alt, fallback, name, onError]
  );

  const getRootProps: PropGetter<AvatarRoot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("avatar"),
      className: styles.root({
        className: cn(classNames?.root, props.className),
      }),
    }),
    [classNames?.root, styles]
  );

  const getImgProps: PropGetter<AvatarImage.Props> = useCallback(
    () => ({
      draggable: "false",
      ...imageProps,
      "data-slot": dataAttrDev("img"),
      onError: handleOnError,
      src: imgSrc,
      alt,
      className: styles.img({
        className: cn(classNames?.img, imageProps.className),
      }),
    }),
    [alt, classNames?.img, handleOnError, imageProps, imgSrc, styles]
  );

  const getFallbackProps: PropGetter<AvatarFallback.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("fallback"),
      className: styles.fallback({
        className: cn(classNames?.fallback, props.className),
      }),
    }),
    [classNames?.fallback, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getImgProps,
      getFallbackProps,
      fallBackString,
      hasImage,
    }),
    [fallBackString, getFallbackProps, getImgProps, getRootProps, hasImage]
  );
};
export namespace useAvatar {
  export interface Props extends AvatarVariants, UIProps<"img"> {
    fallback?: string | ((_: { alt: string; name?: string }) => string);
    classNames?: SlotsToClassNames<AvatarSlots>;
    name?: string;
  }
}
