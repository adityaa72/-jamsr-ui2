import { createContext, use } from "react";

import type { TagsInput } from "./tags-input";

const TagsInputContext = createContext<TagsInputConfig.Props>({});
export const TagsInputConfig = (props: TagsInputConfig.Props) => {
  const { children, ...restProps } = props;
  return <TagsInputContext value={restProps}>{children}</TagsInputContext>;
};

export const useTagsInputConfig = () => {
  const context = use(TagsInputContext);
  return context;
};

export namespace TagsInputConfig {
  export interface Props extends TagsInput.Props {}
}
