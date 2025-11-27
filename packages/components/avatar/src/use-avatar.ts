"use client";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { avatarVariants } from "./styles";

import type { PropGetter } from "@jamsrui/utils";

import type { AvatarFallback } from "./avatar-fallback";
import type { AvatarImage } from "./avatar-image";
import type { AvatarRoot } from "./avatar-root";
import type { AvatarVariants } from "./styles";

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error";

export const useAvatar = (props: useAvatar.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    avatarVariants.variantKeys
  );
  const { ...elementProps } = $props;
  const [status, setStatus] = useState<ImageLoadingStatus>("idle");
  const color = variantProps.color ?? "default";
  const imageRef = useRef<HTMLImageElement>(null);

  const styles = avatarVariants({
    ...variantProps,
    color,
  });

  const handleOnError = useCallback(() => {
    setStatus("error");
  }, [setStatus]);

  const handleOnLoad = useCallback(() => {
    setStatus("loaded");
  }, [setStatus]);

  const getRootProps = useCallback(
    (): AvatarRoot.Props => ({
      ...elementProps,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("avatar"),
      "data-status": dataAttrDev(status),
      className: styles.root({
        className: props.className,
      }),
    }),
    [elementProps, props.className, status, styles]
  );

  useLayoutEffect(() => {
    const img = imageRef.current;
    if (img?.complete) {
      if (img.naturalWidth === 0) {
        setStatus("error");
      } else {
        setStatus("loaded");
      }
    } else {
      setStatus("loading");
    }
  }, []);

  const getImgProps: PropGetter<AvatarImage.Props> = useCallback(
    (props) => ({
      ...props,
      ref: imageRef,
      "data-slot": dataAttrDev("img"),
      onError: handleOnError,
      onLoad: handleOnLoad,
      className: styles.img({
        className: props.className,
      }),
    }),
    [handleOnError, handleOnLoad, styles]
  );

  const getFallbackProps: PropGetter<AvatarFallback.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("fallback"),
      className: styles.fallback({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getIndicatorProps: PropGetter<AvatarFallback.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("indicator"),
      className: styles.indicator({
        className: props.className,
      }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getImgProps,
      getFallbackProps,
      getIndicatorProps,
      status,
    }),
    [getFallbackProps, getImgProps, getIndicatorProps, getRootProps, status]
  );
};
export namespace useAvatar {
  export interface Props extends AvatarVariants, AvatarRoot.Props {}
}
