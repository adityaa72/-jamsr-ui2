import { useLabel } from "./use-label";

export const Label = (props: Label.Props) => {
  const { children, ...labelProps } = useLabel(props);
  return <label {...labelProps}>{children}</label>;
};

export namespace Label {
  export interface Props extends useLabel.Props {}
}
