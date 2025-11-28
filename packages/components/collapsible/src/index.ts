import { Collapsible as CollapsibleRoot } from "./collapsible";
import { CollapsibleContent } from "./collapsible-content";
import { CollapsibleTrigger } from "./collapsible-trigger";

export { CollapsibleConfig, useCollapsibleConfig } from "./collapsible-config";
export { CollapsibleContent, CollapsibleTrigger };

export const Collapsible = Object.assign(CollapsibleRoot, {
  Root: CollapsibleRoot,
  Content: CollapsibleContent,
  Trigger: CollapsibleTrigger,
});
