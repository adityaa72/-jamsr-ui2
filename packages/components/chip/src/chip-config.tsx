import { createContext, use } from "react";
import { Chip } from "./chip";

const ChipContext = createContext<ChipConfig.Props>({});
export const ChipConfig = (props: ChipConfig.Props) => {
  const { children, ...restProps } = props;
  return <ChipContext value={restProps}>{children}</ChipContext>;
};

export const useChipConfig = () => {
  const context = use(ChipContext);
  return context;
};

export namespace ChipConfig {
  export interface Props extends Chip.Props {}
}
