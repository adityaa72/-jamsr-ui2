"use client";
import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";
import { PropsWithChildren } from "react";
import { useIconButtonContext } from "./icon-button-context";
import { IconButtonLabel } from "./icon-button-label";
import { LoadingSpinner } from "./spinner";

export const IconButtonRoot = (props: PropsWithChildren) => {
  const {
    getButtonProps,
    loadingIcon = <LoadingSpinner />,
    isLoading,
  } = useIconButtonContext();
  const renderElement = useRenderElement("button", {
    props: [
      getButtonProps(),
      {
        children: (
          <>
            <IconButtonLabel />
            {isLoading ? loadingIcon : props.children}
          </>
        ),
      },
    ],
  });
  return renderElement;
};

export namespace IconButtonRoot {
  export interface Props extends UIProps<"button"> {}
}
