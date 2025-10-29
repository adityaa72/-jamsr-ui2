import { CompositeContext } from "./composite-context";
import { useComposite } from "./use-composite";

export const Composite = (props: Composite.Props) => {
  const { children } = props;
  const ctx = useComposite(props);
  return <CompositeContext value={ctx}>{children}</CompositeContext>;
};

export namespace Composite {
  export type Orientation = "horizontal" | "vertical" | "both";
  export type Dir = "ltr" | "rtl";

  export interface Props extends useComposite.Props {
    children: React.ReactNode;
  }
}
