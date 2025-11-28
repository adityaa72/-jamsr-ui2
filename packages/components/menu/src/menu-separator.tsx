import { Divider } from "@jamsrui/divider";

export const MenuSeparator = (props: MenuSeparator.Props) => {
  return <Divider {...props} className="my-1.5" />;
};

export namespace MenuSeparator {
  export interface Props extends Divider.Props {}
}
