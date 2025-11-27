"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";
import { SwitchInput } from "./switch-input";
import { SwitchThumb } from "./switch-thumb";

export const SwitchTrack = (props: SwitchTrack.Props) => {
  const { children = <SwitchThumb />, ...restProps } = props;
  const { getTrackProps } = useSwitchContext();
  const renderElement = useRenderElement("div", {
    props: [
      getTrackProps(restProps),
      {
        children: (
          <>
            {children}
            <SwitchInput />
          </>
        ),
      },
    ],
  });
  return renderElement;
};

export namespace SwitchTrack {
  export interface Props extends UIProps<"div"> {}
}
