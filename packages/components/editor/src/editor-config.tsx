import { createContext, use } from "react";

import type { Editor } from "./editor";

const EditorContext = createContext<EditorConfig.Props>({});
export const EditorConfig = (props: EditorConfig.Props) => {
  const { children, ...restProps } = props;
  return <EditorContext value={restProps}>{children}</EditorContext>;
};

export const useEditorConfig = () => {
  const context = use(EditorContext);
  return context;
};

export namespace EditorConfig {
  export interface Props extends Editor.Props {}
}
