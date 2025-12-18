import { ScrollArea as ScrollAreaRoot } from "./scroll-area";
import { ScrollAreaContent } from "./scroll-area-content";
import { useScrollAreaContext } from "./scroll-area-context";
import { ScrollAreaCorner } from "./scroll-area-corner";
import { ScrollAreaScrollbar } from "./scroll-area-scrollbar";
import { ScrollAreaThumb } from "./scroll-area-thumb";
import { ScrollAreaViewport } from "./scroll-area-viewport";
import { scrollAreaVariants } from "./styles";

import type { ScrollAreaSlots, ScrollAreaVariants } from "./styles";

export {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  scrollAreaVariants,
  ScrollAreaViewport,
  useScrollAreaContext,
  type ScrollAreaSlots,
  type ScrollAreaVariants,
};

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  Viewport: ScrollAreaViewport,
  Content: ScrollAreaContent,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
});

export namespace ScrollArea {
  export interface Props extends ScrollAreaRoot.Props {}
  export interface ViewportProps
    extends React.ComponentProps<typeof ScrollAreaViewport> {}
  export interface ContentProps
    extends React.ComponentProps<typeof ScrollAreaContent> {}
  export interface ScrollbarProps
    extends React.ComponentProps<typeof ScrollAreaScrollbar> {}
  export interface ThumbProps
    extends React.ComponentProps<typeof ScrollAreaThumb> {}
  export interface CornerProps
    extends React.ComponentProps<typeof ScrollAreaCorner> {}
}
