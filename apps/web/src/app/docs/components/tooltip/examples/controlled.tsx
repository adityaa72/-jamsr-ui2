"use client";

import { Button } from "@jamsr-ui/react";
import { Tooltip } from "@jamsr-ui/react";
import { useState } from "react";

export const TooltipControlled = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-24 grid place-content-center gap-4">
      <Tooltip
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title="This is a tooltip"
      >
        <Button>Hover me</Button>
      </Tooltip>
      {!isOpen ? "Closed" : "Opened"}
    </div>
  );
};
