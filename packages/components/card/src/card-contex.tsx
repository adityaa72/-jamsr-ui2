import { createContext, use } from "react";
import { useCard } from "./use-card";

const CardContext = createContext<CardContext.Type | null>(null);

export const CardContextProvider = (props: CardContext.Props) => {
  const { children, ctx } = props;
  return <CardContext value={ctx}>{children}</CardContext>;
};

export const useCardContext = () => {
  const context = use(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

export namespace CardContext {
  export interface Type extends ReturnType<typeof useCard> {}
  export interface Props {
    ctx: Type;
    children: React.ReactNode;
  }
}
