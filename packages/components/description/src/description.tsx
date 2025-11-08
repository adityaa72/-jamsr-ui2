import { useRenderElement } from "@jamsrui/hooks";

import { useDescription } from "./use-description";

export const Description = (props: Description.Props) => {
  const descProps = useDescription(props);
  const renderElement = useRenderElement("p", {
    props: [descProps],
  });
  return renderElement;
};

export namespace Description {
  export interface Props extends useDescription.Props {}
}
