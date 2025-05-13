import { createContext, use } from "react";

import type { Card } from "./card";

const CardContext = createContext<CardConfig.Props>({});
export const CardConfig = (props: CardConfig.Props) => {
  const { children, ...value } = props;
  return <CardContext value={value}>{children}</CardContext>;
};

export const useCardConfig = () => {
  const context = use(CardContext);
  return context;
};

export namespace CardConfig {
  export interface Props extends Card.Props {}
}
