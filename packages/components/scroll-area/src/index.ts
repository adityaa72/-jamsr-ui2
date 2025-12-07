
import { ScrollArea as ScrollAreaRoot } from "./scroll-area";
import { ScrollAreaConfig, useScrollAreaConfig } from "./scroll-area-config";

export { ScrollAreaConfig, useScrollAreaConfig };

export const ScrollArea = Object.assign(ScrollAreaRoot, {});

export namespace ScrollArea {
  export interface Props extends ScrollAreaRoot.Props {}
  export interface Config extends ScrollAreaConfig.Props {}
}
