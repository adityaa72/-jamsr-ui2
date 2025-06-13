import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchTrack = (props: SwitchTrack.Props) => {
  const { getTrackProps } = useSwitchContext();
  const renderElement = useRenderElement("button", {
    props: [getTrackProps(props)],
  });
  return renderElement;
};

export namespace SwitchTrack {
  export interface Props extends UIProps<"button"> {}
}
