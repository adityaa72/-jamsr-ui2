import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import { dataAttr } from "@jamsrui/utils";

import { useCompositeContext } from "./composite-context";

import type React from "react";

export const useCompositeItem = (props: useCompositeItem.Props) => {
  const { id, isDisabled = false } = props;
  const ctx = useCompositeContext();
  const reactId = useId();

  const localRef = useRef<HTMLElement | null>(null);
  const [itemIndex, setItemIndex] = useState<number>(-1);
  const itemId = id ?? reactId;

  useEffect(() => {
    const { index } = ctx.registerItem({
      id: itemId,
      ref: localRef.current,
      isDisabled,
    });
    setItemIndex(index);
    return () => ctx.unregisterItem(itemId);
  }, [ctx, isDisabled, itemId]);

  const index = itemIndex;
  const isActive = index === ctx.activeIndex;

  const focusItem = useCallback(
    (idx: number) => {
      const el = ctx.items.current[idx]?.ref;
      if (!ctx.virtual) el?.focus();
    },
    [ctx.items, ctx.virtual]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (ctx.virtual) return; // root handles keys in virtual mode
      const rtl = ctx.dir === "rtl";
      const horizontal =
        ctx.orientation === "horizontal" || ctx.orientation === "both";
      const vertical =
        ctx.orientation === "vertical" || ctx.orientation === "both";

      let next = index;
      if (
        (e.key === "ArrowRight" && horizontal && !rtl) ||
        (e.key === "ArrowDown" && vertical) ||
        (e.key === "ArrowLeft" && horizontal && rtl)
      ) {
        e.preventDefault();
        next = ctx.moveNext(index);
        ctx.setActiveIndex(next);
        focusItem(next);
      } else if (
        (e.key === "ArrowLeft" && horizontal && !rtl) ||
        (e.key === "ArrowUp" && vertical) ||
        (e.key === "ArrowRight" && horizontal && rtl)
      ) {
        e.preventDefault();
        next = ctx.movePrev(index);
        ctx.setActiveIndex(next);
        focusItem(next);
      } else if (e.key === "Home" || e.key === "PageUp") {
        e.preventDefault();
        next = ctx.moveFirst();
        ctx.setActiveIndex(next);
        focusItem(next);
      } else if (e.key === "End" || e.key === "PageDown") {
        e.preventDefault();
        next = ctx.moveLast();
        ctx.setActiveIndex(next);
        focusItem(next);
      }
    },
    [ctx, focusItem, index]
  );

  const onFocus = useCallback(() => {
    ctx.setActiveIndex(index);
  }, [ctx, index]);

  const injectedProps = useMemo(
    () =>
      ctx.virtual
        ? {
            tabIndex: -1,
            "aria-selected": dataAttr(isActive),
          }
        : {
            tabIndex: isActive ? 0 : -1,
            onKeyDown,
            onFocus,
          },
    [ctx.virtual, isActive, onFocus, onKeyDown]
  );

  const ref = useCallback((node: HTMLElement | null) => {
    localRef.current = node;
  }, []);

  return {
    props: {
      ...injectedProps,
      id: itemId,
      "data-index": index,
      ref,
    },
    index,
  };
};

export namespace useCompositeItem {
  export interface Props {
    id?: string;
    isDisabled?: boolean;
  }
}
