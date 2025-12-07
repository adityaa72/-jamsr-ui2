import { ScrollArea as ScrollAreaRoot } from "./scroll-area";
import { ScrollAreaViewport } from "./scroll-area-viewport";
import { ScrollAreaContent } from "./scroll-area-content";
import { ScrollAreaScrollbar } from "./scroll-area-scrollbar";
import { ScrollAreaThumb } from "./scroll-area-thumb";
import { ScrollAreaCorner } from "./scroll-area-corner";
import {
  scrollArea,
  type ScrollAreaSlots,
  type ScrollAreaVariants,
} from "./styles";
import { useScrollAreaContext } from "./scroll-area-context";

export {
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
  scrollArea,
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
