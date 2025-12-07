
import { TagsInput as TagsInputRoot } from "./tags-input";
import { TagsInputConfig, useTagsInputConfig } from "./tags-input-config";

export { TagsInputConfig, useTagsInputConfig };

export const TagsInput = Object.assign(TagsInputRoot, {});

export namespace TagsInput {
  export interface Props extends TagsInputRoot.Props {}
  export interface Config extends TagsInputConfig.Props {}
}
