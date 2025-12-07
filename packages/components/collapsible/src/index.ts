import { Collapsible as CollapsibleRoot } from "./collapsible";
import { CollapsibleConfig, useCollapsibleConfig } from "./collapsible-config";
import { CollapsibleContent } from "./collapsible-content";
import { CollapsibleTrigger } from "./collapsible-trigger";

export {
  CollapsibleConfig,
  CollapsibleContent,
  CollapsibleTrigger,
  useCollapsibleConfig,
};

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Trigger: CollapsibleTrigger,
});

export namespace Collapsible {
  export interface Props extends CollapsibleRoot.Props {}
  export interface Config extends CollapsibleConfig.Props {}
  export interface Content extends CollapsibleContent.Props {}
  export interface Trigger extends CollapsibleTrigger.Props {}
}
