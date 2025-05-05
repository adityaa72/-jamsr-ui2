import { createContext, use } from "react";
import { Textarea } from "./textarea";

const TextareaContext = createContext<TextareaConfig.Props>({});
export const TextareaConfig = (props: TextareaConfig.Props) => {
  const { children, ...restProps } = props;
  return <TextareaContext value={restProps}>{children}</TextareaContext>;
};

export const useTextareaConfig = () => {
  const context = use(TextareaContext);
  return context;
};

export namespace TextareaConfig {
  export interface Props extends Textarea.Props {}
}
