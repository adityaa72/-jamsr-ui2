"use client";

import { Button, AlertPopover } from "@jamsrui/react";

export const AlertPopoverUsage = () => {
  return (
    <AlertPopover
      title="Are you sure?"
      message="You won't be able to revert this!"
      onConfirm={() => {
        console.log("Confirmed");
      }}
      onCancel={() => {
        console.log("Canceled");
      }}
    >
      <Button>Click to delete!</Button>
    </AlertPopover>
  );
};
