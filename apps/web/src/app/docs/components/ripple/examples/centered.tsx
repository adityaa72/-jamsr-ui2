import { Ripple } from "@jamsrui/react";

export const RippleAtCenter = () => {
  return (
    <div className="relative grid h-full place-items-center">
      <div className="h-[500px]">
        <Ripple isCentered />
        Click anywhere
      </div>
    </div>
  );
};
