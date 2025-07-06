"use client";

import { IconButton, LinearProgress } from "@jamsrui/react";
import { MinusIcon, PlusIcon } from "@jamsrui/icons";
import { useState } from "react";

export const LinearProgressControlled = () => {
  const [value, setValue] = useState(10);
  const OnIncrease = () => setValue(value + 10);
  const OnDecrease = () => setValue(value - 10);
  const CanIncrease = value < 100;
  const CanDecrease = value > 0;
  return (
    <div className="flex w-full items-center gap-4">
      <IconButton
        label="Decrease"
        isDisabled={!CanDecrease}
        onClick={OnDecrease}
      >
        <MinusIcon />
      </IconButton>
      <LinearProgress isIntermediate={false} progress={value} />
      <IconButton
        label="Increase"
        isDisabled={!CanIncrease}
        onClick={OnIncrease}
      >
        <PlusIcon />
      </IconButton>
    </div>
  );
};
