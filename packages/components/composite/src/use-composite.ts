import { useCallback, useMemo, useRef, useState } from "react";

import { isDisabledElement } from "@jamsrui/utils";

import type { Composite } from "./composite";

type CompositeItemRef = {
  id: string;
  ref: HTMLElement | null;
  isDisabled: boolean;
};

export const useComposite = (props: useComposite.Props) => {
  const {
    dir = "ltr",
    loop = true,
    orientation = "vertical",
    virtual = false,
  } = props;

  const items = useRef<CompositeItemRef[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLElement | null>(null);

  // console.log({
  //   rootRef,
  //   items,
  //   activeIndex,
  // });

  const registerItem = useCallback((entry: CompositeItemRef) => {
    items.current.push({
      ...entry,
      isDisabled:
        entry.isDisabled || (entry.ref ? isDisabledElement(entry.ref) : false),
    });
    const index = items.current.length - 1;
    return { index };
  }, []);

  const unregisterItem = useCallback((id: string) => {
    const i = items.current.findIndex((item) => item.id === id);
    if (i >= 0) items.current.splice(i, 1);
    setActiveIndex((idx) =>
      Math.max(0, Math.min(items.current.length - 1, idx))
    );
  }, []);

  const getIndex = useCallback(
    (id: string) => items.current.findIndex((item) => item.id === id),
    []
  );

  const nextEnabled = useCallback(
    (from: number, delta: number) => {
      const len = items.current.length;
      if (len === 0) return -1;
      let i = from;
      for (let step = 0; step < len; step++) {
        i = i + delta;
        if (loop) i = (i + len) % len;
        else if (i < 0 || i >= len) return from;
        const item = items.current[i];
        if (!item?.isDisabled) return i;
      }
      return from;
    },
    [loop]
  );

  const movePrev = useCallback(
    (from: number) => nextEnabled(from, -1),
    [nextEnabled]
  );

  const moveNext = useCallback(
    (from: number) => nextEnabled(from, 1),
    [nextEnabled]
  );

  const moveFirst = useCallback(() => nextEnabled(-1, 1), [nextEnabled]);

  const moveLast = useCallback(
    () => nextEnabled(items.current.length, -1),
    [nextEnabled]
  );

  // In virtual mode, root handles keydown and keeps focus, exposing aria-activedescendant
  const onRootKeyDown = (e: React.KeyboardEvent) => {
    if (!virtual) return;
    const rtl = dir === "rtl";
    const horizontal = orientation === "horizontal" || orientation === "both";
    const vertical = orientation === "vertical" || orientation === "both";

    let next = activeIndex;
    if (
      (e.key === "ArrowRight" && horizontal && !rtl) ||
      (e.key === "ArrowDown" && vertical) ||
      (e.key === "ArrowLeft" && horizontal && rtl)
    ) {
      e.preventDefault();
      next = moveNext(activeIndex);
      setActiveIndex(next);
    } else if (
      (e.key === "ArrowLeft" && horizontal && !rtl) ||
      (e.key === "ArrowUp" && vertical) ||
      (e.key === "ArrowRight" && horizontal && rtl)
    ) {
      e.preventDefault();
      next = movePrev(activeIndex);
      setActiveIndex(next);
    } else if (e.key === "Home" || e.key === "PageUp") {
      e.preventDefault();
      next = moveFirst();
      setActiveIndex(next);
    } else if (e.key === "End" || e.key === "PageDown") {
      e.preventDefault();
      next = moveLast();
      setActiveIndex(next);
    }
  };

  // When active item changes in virtual mode, update aria-activedescendant target id on root
  const activeId = items.current[activeIndex]?.id;

  return useMemo(
    () => ({
      registerItem,
      unregisterItem,
      getIndex,
      items,
      activeIndex,
      setActiveIndex,
      movePrev,
      moveNext,
      moveFirst,
      moveLast,
      orientation,
      dir,
      loop,
      virtual,
    }),
    [
      registerItem,
      unregisterItem,
      getIndex,
      activeIndex,
      movePrev,
      moveNext,
      moveFirst,
      moveLast,
      orientation,
      dir,
      loop,
      virtual,
    ]
  );
};

export namespace useComposite {
  export interface Props {
    orientation?: Composite.Orientation;
    dir?: Composite.Dir;
    loop?: boolean;
    virtual?: boolean;
  }
}
