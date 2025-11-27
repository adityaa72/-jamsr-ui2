"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { AvatarIcon } from "@jamsrui/icons";

import { useAvatarContext } from "./avatar-context";

import type { UIProps } from "@jamsrui/utils";
import { useEffect, useState } from "react";

export const AvatarFallback = (props: AvatarFallback.Props) => {
  const { delayMs = 0, children = <AvatarIcon />, ...restProps } = props;
  const { getFallbackProps, status } = useAvatarContext();
  const [showFallback, setShowFallback] = useState(delayMs === 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFallback(true);
    }, delayMs);
    return () => clearTimeout(timeout);
  }, [delayMs]);

  const renderElement = useRenderElement("div", {
    props: [getFallbackProps(restProps), { children }],
  });
  if (status === "loaded" || !showFallback) return null;
  return renderElement;
};

export namespace AvatarFallback {
  export interface Props extends UIProps<"div"> {
    delayMs?: number;
  }
}
