import { useRenderElement } from "@jamsr-ui/hooks";

import { useIconButton } from "./use-icon-button";

export const IconButton = (props: IconButton.Props) => {
  const { children } = props;
  const ctx = useIconButton(props);
  const { getButtonProps, getLabelProps } = ctx;

  const composedChildren = (
    <>
      <span {...getLabelProps({})} />
      {children}
    </>
  );

  const renderElement = useRenderElement("button", {
    props: [
      getButtonProps(),
      {
        children: composedChildren,
      },
    ],
  });
  return renderElement;
};

export namespace IconButton {
  export interface Props extends useIconButton.Props {}
}
