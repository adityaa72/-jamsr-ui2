"use client";

import { Button } from "@jamsrui/button";
import { Composite, CompositeItem, useCompositeItem } from "@jamsrui/react";

const CompositeButton = () => {
  const { index } = useCompositeItem({});
  return <Button>hiiii {index}</Button>;
};

export const CompositeUsage = () => {
  return (
    <Composite>
      <div className="flex flex-col gap-4">
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
      </div>
    </Composite>
  );
};
