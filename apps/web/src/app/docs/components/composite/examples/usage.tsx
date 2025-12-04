"use client";

import { Button } from "@jamsrui/react";
import { Composite, CompositeItem } from "@jamsrui/react";

const CompositeButton = (props) => {
  // const { index } = useCompositeItem({});
  return <Button {...props}>hiiii </Button>;
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
